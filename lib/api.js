import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { stringify } from 'querystring'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs(subDirs) {
    // console.log(`getPostSlugs(${JSON.stringify(subDirs)})`);
    subDirs = Array.isArray(subDirs) ? subDirs : [];
    const fullPath = [postsDirectory].concat(subDirs).join('/');
    // console.log(`fullpath: ${fullPath}`);
    const dirEntries = fs.readdirSync(fullPath, {withFileTypes: true});
    const slugs = [];
    dirEntries.forEach((entry) => {
        if(!entry.name.match(/^\./)) {
            if(entry.isFile()) {
                // console.log(`Slug: ${subDirs.concat([entry.name]).join('-')}`);
                slugs.push(subDirs.concat([entry.name]).join('-'));
            } else if(entry.isDirectory()) {
                slugs.push(...(getPostSlugs([...subDirs, entry.name])));
            }
        }
    });
    return slugs;
}

export function getPostBySlug(slug, fields = []) {
    console.log(`getPostBySlug(${slug})`);
    const realSlug = slug.replace(/\.md$/, '');

    // Get file contents
    const [match, path, timestamp, title] = realSlug.match(/(.*?)([\d+]{12,19}) (.*)/);
    const fileName = `${timestamp} ${title}`;
    const fullPath = path.length > 0 ? [postsDirectory].concat(path.split('-')).join('/') : postsDirectory;
    const fileContents = fs.readFileSync(`${fullPath}/${fileName}.md`, 'utf8');

    // console.log(`Parse and construct meta-data`);
    // Parse and construct meta-data
    const { data, content } = matter(fileContents);
    const [fullmatch, year, month, day, hours, minutes] = timestamp.match(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/);
    data.title = title;
    data.date = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;

    // console.log(`Populate excerpt`);
    if(content.length <= 100) {
        data.excerpt = content;
        data.more = false;
    } else {
        data.excerpt = content.substring(0, content.indexOf('\n', 100));
        data.more = true;
    }
    if(!data.author) {
        data.author = {};
    }

    // console.log(`Return requested fields`);
    // Ensure only the minimal needed data is exposed
    const items = {};
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    })
    // console.log(`End getPostBySlug`);

    return items;
}

export function getAllPosts(fields = []) {
    // console.log(`getAllPosts()`);
    const slugs = getPostSlugs();
    // console.log(`slugs: ${JSON.stringify(slugs)}`);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
    return posts;
}
