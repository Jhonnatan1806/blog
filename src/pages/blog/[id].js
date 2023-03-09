import Layout from '@/components/Layout'
import Head from 'next/head'
import { getPostById } from '@/services/servicePosts'
import { Heading, VStack, Image, Text } from '@chakra-ui/react'

export default function PostById({ post, notFound }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <VStack maxW={1200} mx='auto' py={8} px={2}>
          {notFound
            ? (
              <Heading as='h1' fontSize={[24, 48]}>Post not found</Heading>
              )
            : (
              <>
                <Heading as='h1' fontSize={[24, 48]}>{post.title}</Heading>
                <Image src='https://placekitten.com/800/300' alt='post' />
                <Text fontSize={[16, 28]}>{post.body}</Text>
                <Text fontSize={[12, 24]} w='100%'>published on 1 Mar 2022</Text>
              </>)}
        </VStack>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const post = await getPostById(params.id)
  console.log('post', post.id)
  if (post.id === undefined) return { props: { post, notFound: true } }
  return {
    props:
    {
      post,
      notFound: false
    }
  }
}
