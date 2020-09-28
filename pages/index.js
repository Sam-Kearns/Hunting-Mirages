import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Footer from '../components/footer'
import markdownToHtml from '../lib/markdownToHtml'

export default function Index({ allPosts }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>
                <Intro />
                <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                            youtubeId={heroPost.youtubeId}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    <Footer />
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'youtubeId'
    ])

    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].excerpt) {
            console.log(`converting excerpt for ${allPosts[i].title}`);
            allPosts[i].excerpt = await markdownToHtml(allPosts[i].excerpt);
        }
    }


    return {
        props: { allPosts },
    }
}
