import { Box, Flex, Text } from '@chakra-ui/react';
import tw from 'tailwind-styled-components';

import { PolkadotIcon } from '../../components/Svg';
import Page from '../Page';

const TittleWrapper = tw.div`
  flex justify-between items-center px-16
`;
const TittleContainer = tw.div`
  text-lg font-semibold text-gray-800 inset-y-0 left-0 w-[50%]
`;
const SubtilleContainer = tw.div`
  inset-y-0 right-0
`;

const ContentWrapper = tw.div`
  flex flex-auto p-16 grid grid-cols-3 gap-4
`;
const ProjectContainer = tw.div`
  w-full
`;
const ProjectWrapper = tw.div`
  relative box-content h-72 border-4 rounded rounded-lg bg-white-100 
`;
const TopLeftContent = tw.div`
  absolute  left-5 top-5 h-16 w-16
`;
const TopRightContent = tw.div`
  absolute  right-5 top-5 h-16 w-16
`;
const BottomLeftContent = tw.div`
  absolute bottom-5 left-5
`;
const BottomRightContent = tw.div`
  absolute bottom-5 right-5
`;
const polkadoticons = <PolkadotIcon width={48} height={48}></PolkadotIcon>;
const ListProject = [
  {
    icon: polkadoticons,
    name: 'Polkadot',
    token: 'DOT',
    score: 10,
    last: '09/03/2022 03:20:00 AM',
    viewno: 234,
  },
  {
    icon: polkadoticons,
    name: 'Polkadot',
    token: 'DOT',
    score: 10,
    last: '09/03/2022 03:20:00 AM',
    viewno: 234,
  },
  {
    icon: polkadoticons,
    name: 'Polkadot',
    token: 'DOT',
    score: 10,
    last: '09/03/2022 03:20:00 AM',
    viewno: 234,
  },
  {
    icon: polkadoticons,
    name: 'Polkadot',
    token: 'DOT',
    score: 10,
    last: '09/03/2022 03:20:00 AM',
    viewno: 234,
  },
];

const Project = () => (
  <Page>
    <>
      <TittleWrapper>
        <TittleContainer>All project</TittleContainer>
        <SubtilleContainer>
          All project in Voincheck and VEcosystem
        </SubtilleContainer>
      </TittleWrapper>
      <ContentWrapper>
        {ListProject.map((value, index) => (
          <ProjectContainer key={index}>
            <ProjectWrapper>
              <TopLeftContent>
                <Flex>
                  <Box>{value.icon}</Box>
                  <Box>
                    <Flex>
                      <Text as="b" fontSize="24">
                        {value.name}
                      </Text>
                    </Flex>
                    <Text as="b" fontSize="16">
                      {value.token}
                    </Text>
                  </Box>
                </Flex>
              </TopLeftContent>
              <TopRightContent>
                <Flex>
                  <Box>
                    <Flex>
                      <Text as="b" fontSize="18">
                        Score
                      </Text>
                    </Flex>
                    <Text as="b" fontSize="12">
                      {value.score}
                    </Text>
                  </Box>
                </Flex>
              </TopRightContent>
              <BottomLeftContent>
                <Flex>
                  <Box>
                    <Flex>
                      <Text as="b" fontSize="18">
                        Last changed
                      </Text>
                    </Flex>
                    <Text as="b" fontSize="12">
                      {value.last}
                    </Text>
                  </Box>
                </Flex>
              </BottomLeftContent>
              <BottomRightContent>
                <Flex>
                  <Box>
                    <Flex>
                      <Text as="b" fontSize="18">
                        Viewed number
                      </Text>
                    </Flex>
                    <Text as="b" fontSize="12">
                      {value.viewno}
                    </Text>
                  </Box>
                </Flex>
              </BottomRightContent>
            </ProjectWrapper>
          </ProjectContainer>
        ))}
      </ContentWrapper>
    </>
  </Page>
);

export default Project;
