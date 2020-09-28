import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import YouTube from '../components/youtube'
import markdownStyles from './markdown-styles.module.css'

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    youtubeId
}) {
    return (
        <div>
            <div className="mb-5">
                {youtubeId ? (
                    <YouTube youtubeId={youtubeId} />
                ) : (
                        <CoverImage title={title} src={coverImage} slug={slug} />
                    )}
            </div>
            <h3 className="text-2xl mb-3 leading-snug">
                <DateFormatter dateString={date} /> | 
                
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                
            </div>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar name={author.name} picture={author.picture} />
        </div>
    )
}
