import { Container, Flex, Heading, VStack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaBehance, FaDeviantart } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer({ ...props }) {
  return (
    <VStack as='footer' bg='purple.300' minH={400} justifyContent='center'>
      <Container py={2} display='flex' flexDir='column' gap={8} {...props}>
        <Heading as='h2' fontSize={[36, 64]}>Get in touch with me on other platforms</Heading>
        <Flex gap={4} color='white' fontSize={[48, 98]} wrap='wrap'>
          <Link href='#'><Text> <FaLinkedin /> </Text></Link>
          <Link href='#'><Text> <FaGithub /> </Text></Link>
          <Link href='#'><Text> <FaYoutube /> </Text></Link>
          <Link href='#'><Text> <FaTwitter /> </Text></Link>
          <Link href='#'><Text> <FaBehance /> </Text></Link>
          <Link href='#'><Text> <FaDeviantart /> </Text></Link>
        </Flex>
      </Container>
    </VStack>
  )
}
