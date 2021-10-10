# HuntingMirages.com

This is the code for the website at Hunting Mirages dot com.

This site is built using the Next.js [Static Generation](https://nextjs.org/docs/basic-features/pages) feature with markdown files as a blog data source.

The blog posts are stored in `/_posts` as markdown files with front matter support. Adding a new markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.
 
## Getting Started

To run the site locally for develpment:

```bash
npm install
npm run dev
```

Your website should now be up and running on [http://localhost:3000](http://localhost:3000).


# Deployment
The master branch of this repository is automatically published to the live website via Netlify.


# Notes

This website uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v1.4 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
