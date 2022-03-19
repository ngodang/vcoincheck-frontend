import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { DetailTable } from '../components/Table';

const bgSearch = 'url(../assets/images/button/btn-search.png)';

const Table = () => (
  <DetailTable
    head={
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Member since</th>
        <th>Status</th>
        <th>Action</th>
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
              View detail
            </Button>
          </a>
        </Link>
      </>
    }
    pagination={{
      stats: '1 - 10 of 350',
      current: 2,
      nbPage: 5,
      href: '/tables',
    }}
  >
    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>12/09/2020</td>
      <td>Active</td>
      <td>
        <Link href="/">
          <a>Edit</a>
        </Link>
      </td>
    </tr>
  </DetailTable>
);

export { Table };
