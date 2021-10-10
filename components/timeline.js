import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import YouTube from './youtube'
import SoundCloud from './soundcloud'
import markdownStyles from './markdown-styles.module.css'

export default function Timeline({ events }) {
    return (
        <div className="timeline">
            <div className="flex flex-col relative">
                <div className="line absolute h-full w-1 border-blue-300 border-2 boxGlow"></div>
                {events.map((event) => {
                    const [match, category] = (event.slug) ? event.slug.match(/^([^-]*).*?\d{12}/) : '';
                    const catStyles = {
                        Thoughts: { 'flex-dir': 'flex-row-reverse', padding: 'pr-50pc', tsWidth: 'w-50pc', textAlign: 'text-right'},
                        Tracks: { 'flex-dir': 'flex-row-reverse', padding: 'pr-50pc',  tsWidth: 'w-25pc', textAlign: 'text-right'},
                        VLog: { 'flex-dir': 'flex-row', padding: 'pl-50pc',  tsWidth: 'w-25pc', textAlign: 'text-left'},
                        Releases: { 'flex-dir': 'flex-row', padding: 'pl-50pc', tsWidth: 'w-50pc', textAlign: 'text-left'},
                    }[category];
                    return (
                        <div
                            className={`flex flex-col sm:flex-row w-full z-10 sm:mb-5`}
                            key={event.slug}
                        >
                            <div className={`w-full sm:w-20pc  mt-2 px-2 border-blue-300 border-t-2 text-blue-100 font-mechsuit text-xs textGlowSmall`}>
                                <DateFormatter dateString={event.date} />
                            </div>
                            <div className={`relative ml-5 mt-2 sm:w-80pc sm:ml-0 sm:mt-0 bg-black bg-opacity-25 border-blue-300 border-2 boxGlow overflow-hidden`}>
                                <h3 className="text-1xl m-2 leading-snug font-mechsuit text-blue-100 textGlowSmall">
                                    <Link as={`/posts/${event.slug}`} href="/posts/[slug]">
                                        <a className="hover:underline">{event.title}</a>
                                    </Link>
                                </h3>
                                    <CoverImage title={event.title} src={event.coverImage} slug={event.slug} />
                                    <YouTube youtubeId={event.youtubeId} />
                                    <SoundCloud soundcloudId={event.soundcloudId} />
                                <div
                                    className={markdownStyles['markdown'], 'm-2 text-s'}
                                    dangerouslySetInnerHTML={{ __html: event.excerpt }}
                                />
                                {(event.more) ? (
                                    <Link as={`/posts/${event.slug}`} href="/posts/[slug]">
                                        <a className="m-5 textGlow floatRight hover:underline">more...</a>
                                    </Link>
                                ) : '' }
                            </div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}
