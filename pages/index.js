import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import Timeline from '../components/timeline'

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
                    <Timeline events={allPosts} />
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
        'youtubeId',
        'soundcloudId',
        'more'
    ])

    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].excerpt) {
            allPosts[i].excerpt = await markdownToHtml(allPosts[i].excerpt);
        }
    }


    return {
        props: { allPosts },
    }
}
