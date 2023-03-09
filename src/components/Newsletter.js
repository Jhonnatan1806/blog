import { Input, Button, Flex } from '@chakra-ui/react'

export default function Newsletter() {
  return (
    <>
      <Flex width='100%'>
        <Flex alignItems='center' flexDir={['column', 'row']} width={800} mx='auto'>
          <Input
            width={['100%', '66%']}
            rounded='none'
            placeholder='Enter your email'
            _focus={{ borderColor: 'purple.300', outline: 'none' }}
          />
          <Button
            width={['100%', '33%']}
            rounded='none'
            bg='gray.900'
            color='white'
            _hover={{ bg: 'purple.300' }}
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
