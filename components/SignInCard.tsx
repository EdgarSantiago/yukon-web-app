import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('black', 'black')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={12}>
        <Stack align={'center'}>
          <Heading fontSize={'7xl'} fontFamily={'spaceage'}>Y</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'black')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" px={100}>
              <FormLabel>Email address</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'#fafafa'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'white'}
                color={'black'}
                _hover={{
                  bg: 'black',
                  textColor: 'white'
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}