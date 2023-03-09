import React from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Navbar from './Navbar'

export default function Header({ ...props }) {
  return (
    <VStack as='header' bg='purple.300'>
      <Container py={2} px={[0, 2]} {...props}>
        <Navbar />
      </Container>
    </VStack>
  )
}
