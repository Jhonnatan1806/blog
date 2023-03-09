import React from 'react'
import { Flex, Heading, Image, Text, Link } from '@chakra-ui/react'

export default function Post({ item }) {
  return (
    <>
      <Link href={`/blog/${item.id}`}>
        <Flex flexDir={['column', 'column', 'row']} gap={4}>
          <Image src='https://placekitten.com/420/180' alt='post' rounded='md' />
          <Flex flexDir='column' justifyContent='center' gap={2}>
            <Text>18/06/2023</Text>
            <Heading fontSize={[20, 32]} noOfLines={1}>{item.title}</Heading>
            <Text fontSize={[16, 24]} noOfLines={1}>{item.body}</Text>
          </Flex>
        </Flex>
      </Link>
    </>
  )
}
