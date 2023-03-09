import React from 'react'
import { Box, Flex, IconButton, Link, List, ListItem, Menu, MenuItem, useDisclosure } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { routes } from '@/routes/routes'

export default function Navbar() {
  return (
    <>
      <Flex as='nav'>
        <List display={['none', 'flex']} gap={4}>
          {
        routes.map((route, index) => (
          <ListItem key={index}>
            <Link href={route.path} fontSize={24}>{route.name}</Link>
          </ListItem>
        ))
      }
        </List>
      </Flex>
      <ToogleBar display={['block', 'none']} />
    </>
  )
}

export function ToogleBar({ ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box {...props}>
        <IconButton
          colorScheme='brand'
          icon={<FaBars />}
          aria-label='Open menu'
          onClick={isOpen ? onClose : onOpen}
          ml={2}
        />
        <MobileNavbar isOpen={isOpen} />
      </Box>
    </>
  )
}

export function MobileNavbar({ isOpen }) {
  return (
    <>
      <Box bg='purple.300'>
        {isOpen
          ? (
            <Menu>
              {routes.map((route, index) => (
                <MenuItem key={index}>
                  <Link href={route.path} fontSize={24}>{route.name}</Link>
                </MenuItem>
              ))}
            </Menu>
            )
          : null}
      </Box>
    </>
  )
}
