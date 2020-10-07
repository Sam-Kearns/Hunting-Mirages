import Container from '../components/container'
import Timeline from '../components/timeline'
import Layout from '../components/layout'
import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export default function Index({allPosts}) {
    return (
        <Layout>
            <Head>
                <title>Timeline Test</title>
            </Head>
            <Container>
                <Timeline events={allPosts} />
            </Container>
        </Layout>
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
            allPosts[i].excerpt = await markdownToHtml(allPosts[i].excerpt);
        }
    }

    return {
        props: { allPosts }
    }
}
