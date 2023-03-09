import Head from 'next/head'
import Layout from '@/components/Layout'
import { Heading, VStack, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <VStack maxW={1200} mx='auto' py={8} px={2}>
          <Heading as='h1' fontSize={[24, 48]}>About me</Heading>
          <Text fontSize={[24, 48]} maxW={800}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean vitae diam eget libero ullamcorper vestibulum
            iaculis non nisi. Suspendisse vel pretium elit. Sed sed
            imperdiet ex, a tempus magna. Vestibulum sed mauris id
            risus efficitur euismod. Sed maximus accumsan posuere.
            Etiam vestibulum, diam a ultricies posuere, enim nisi mollis
            metus, vitae sodales massa neque ac augue. In eleifend mauris
            tempor metus congue varius. Ut ultricies efficitur commodo.
          </Text>
        </VStack>

      </Layout>
    </>
  )
}
