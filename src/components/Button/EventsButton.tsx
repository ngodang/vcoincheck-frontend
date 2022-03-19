import React from 'react';

import { Flex, Button, Stack, Box } from '@chakra-ui/react';

const EventsButton = () => {
  const bgSubmit = 'url(../assets/images/button/btn-submit.png)';
  const bgdonate = 'url(../assets/images/button/btn-donate.png)';
  return (
    <>
      <Flex pb={20}>
        <Box p={4} w="100%">
          <Stack direction="row" spacing={8}>
            <Button
              bg={bgSubmit}
              bgRepeat="no-repeat"
              color="white"
              fontSize="lg"
              fontWeight="medium"
              borderRadius="xl"
              border="1px solid transparent"
              height="50px"
              width="100%"
              minW={200}
              pr={10}
              _hover={{
                color: 'blue.400',
              }}
              _active={{
                color: 'red.400',
              }}
            >
              Submit project
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Flex>
        <Box p={4} w="100%">
          <Stack direction="row" spacing={8}>
            <Button
              bg={bgdonate}
              bgRepeat="no-repeat"
              color="white"
              fontSize="lg"
              fontWeight="medium"
              borderRadius="xl"
              border="1px solid transparent"
              height="50px"
              width="100%"
              minW={200}
              pr={10}
              _hover={{
                color: 'blue.400',
              }}
              _active={{
                color: 'red.400',
              }}
            >
              Donate for us
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
export default EventsButton;
