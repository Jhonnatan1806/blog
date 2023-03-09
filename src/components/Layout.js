import React from 'react'
import { Box } from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header maxW={1200} mx='auto' />
      <Box as='main'> {children}</Box>
      <Footer maxW={1200} mx='auto' />
    </>
  )
}
