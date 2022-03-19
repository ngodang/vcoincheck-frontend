import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

import { DetailTable } from '../../components/Table';

const bgSearch = 'url(../assets/images/button/btn-search.png)';

const THWrapper = tw.th`
  border border-slate-600
`;

const ListProjec = [
  {
    no: 1,
    name: 'BSC',
    ecosystem: 'ECOSYSTEM',
    category: 'category',
    status: 'status',
    noofviewd: 'noofviewd',
    last: 'last',
  },
  {
    no: 2,
    name: 'BSC',
    ecosystem: 'ECOSYSTEM',
    category: 'category',
    status: 'status',
    noofviewd: 'noofviewd',
    last: 'last',
  },
  {
    no: 3,
    name: 'BSC',
    ecosystem: 'ECOSYSTEM',
    category: 'category',
    status: 'status',
    noofviewd: 'noofviewd',
    last: 'last',
  },
  {
    no: 4,
    name: 'BSC',
    ecosystem: 'ECOSYSTEM',
    category: 'category',
    status: 'status',
    noofviewd: 'noofviewd',
    last: 'last',
  },
  {
    no: 5,
    name: 'BSC',
    ecosystem: 'ECOSYSTEM',
    category: 'category',
    status: 'status',
    noofviewd: 'noofviewd',
    last: 'last',
  },
];

const TopProject = () => (
  <DetailTable
    head={
      <tr>
        <THWrapper>No</THWrapper>
        <THWrapper>Name</THWrapper>
        <THWrapper>ECOSystem</THWrapper>
        <THWrapper>Categories</THWrapper>
        <THWrapper>Status</THWrapper>
        <THWrapper>No of viewed</THWrapper>
        <THWrapper>Last Contributed</THWrapper>
      </tr>
    }
    title="Hot Project"
    buttons={
      <>
        <Link href="/">
          <a>
            <Button
              bg={bgSearch}
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
          </a>
        </Link>
      </>
    }
    pagination={{
      stats: '1 - 5 of 350',
      current: 1,
      nbPage: 5,
      href: '/tables',
    }}
  >
    {ListProjec.map((value, index) => (
      <tr key={index}>
        <td>{value.no}</td>
        <td>{value.name}</td>
        <td>{value.ecosystem}</td>
        <td>{value.category}</td>
        <td>{value.status}</td>
        <td>{value.noofviewd}</td>
        <td>{value.last}</td>
      </tr>
    ))}
  </DetailTable>
);

export default TopProject;
