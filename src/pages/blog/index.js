import Head from 'next/head'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { Box, VStack, StackDivider } from '@chakra-ui/react'
import { getAllPosts } from '@/services/servicePosts'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <Box display='flex' flexDir='column' justifyContent='center' bg='white' minH={720} py={8} px={2}>
          <VStack maxW={1200} divider={<StackDivider borderColor='gray.600' />} spacing={4} mx='auto'>
            {
            posts && posts.map((item) => (
              <Post key={item.id} item={item} />
            ))
            }
          </VStack>
        </Box>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts.slice(0, 4)
    }
  }
}
