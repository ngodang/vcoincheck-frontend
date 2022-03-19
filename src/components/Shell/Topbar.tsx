import React from 'react';

import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import Link from 'next/link';

import { UserService } from '../../service';

function logout() {
  UserService.logout();
}

const Topbar = () => {
  const bgLogin = 'url(../assets/images/button/btn-login.png)';
  const bgAbout = 'url(../assets/images/button/btn-about.png)';

  return (
    <Flex>
      <Box p={4} w="100%">
        <Stack direction="row" spacing={8}>
          <Button
            bg={bgAbout}
            bgRepeat="no-repeat"
            color="white"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            height="50px"
            width="100%"
            minW={200}
            pr={20}
            _hover={{
              color: 'blue.400',
            }}
            _active={{
              color: 'red.400',
            }}
          >
            About us
          </Button>
        </Stack>
      </Box>
      <Box p={4} w="100%">
        <Stack direction="row" spacing={8}>
          {!UserService.userValue ? (
            <Link href="/login" passHref={true}>
              <Button
                bg={bgLogin}
                bgRepeat="no-repeat"
                color="white"
                fontSize="lg"
                fontWeight="medium"
                borderRadius="xl"
                border="1px solid transparent"
                height="50px"
                width="100%"
                minW={200}
                pr={20}
                _hover={{
                  color: 'blue.400',
                }}
                _active={{
                  color: 'red.400',
                }}
              >
                Login
              </Button>
            </Link>
          ) : (
            <Link passHref={true} href={''}>
              <Button
                onClick={logout}
                bg={bgLogin}
                bgRepeat="no-repeat"
                color="white"
                fontSize="lg"
                fontWeight="medium"
                borderRadius="xl"
                border="1px solid transparent"
                height="50px"
                width="100%"
                minW={200}
                pr={20}
                _hover={{
                  color: 'blue.400',
                }}
                _active={{
                  color: 'red.400',
                }}
              >
                Logout
              </Button>
            </Link>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};
export default Topbar;
