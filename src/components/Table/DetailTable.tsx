import { ReactNode } from 'react';

import tw from 'tailwind-styled-components';

import { Pagination } from '../../pagination/Pagination';

type IDetailTableType = {
  head: ReactNode;
  title: string;
  buttons: ReactNode;
  pagination: {
    stats: string;
    current: number;
    nbPage: number;
    href: string;
  };
  children: ReactNode;
};
const TittleWrapper = tw.div`
  flex justify-between items-center
`;
const TittleContainer = tw.div`
  text-lg font-semibold text-gray-800
`;
const ButtonContainer = tw.div`
  flex space-x-2
`;
const BorderWrapper = tw.div`
  mt-5 border border-gray-200 rounded-xl overflow-auto
`;
const TableContainer = tw.table`
table-auto md:table-fixed min-w-full mx-auto whitespace-nowrap overflow-auto border-separate border border-gray-200
`;
const HeadContainer = tw.thead`
  bg-blue-900 border-b border-gray-300 text-white-100 font-semibold px-6 py-5
`;
const BodyContainer = tw.tbody`
  bg-white divide-y divide-gray-200 px-6 py-5
`;
const PaginationWrapper = tw.div`
  mt-5 flex flex-col sm:flex-row items-center justify-between text-sm
`;
const PaginationStats = tw.div`
  mb-2 sm:mb-0
`;

const DetailTable = (props: IDetailTableType) => (
  <>
    <style jsx>
      {`
        table :global(thead th),
        table :global(tbody td) {
          @apply px-6 py-5;
        }

        table :global(tbody td:first-child) {
          @apply text-gray-800 font-semibold;
        }

        table :global(a) {
          @apply text-primary-500;
        }

        table :global(a:hover) {
          @apply text-primary-600;
        }
      `}
    </style>

    <TittleWrapper>
      <TittleContainer>{props.title}</TittleContainer>
      <ButtonContainer>{props.buttons}</ButtonContainer>
    </TittleWrapper>

    <BorderWrapper>
      <TableContainer>
        <HeadContainer>{props.head}</HeadContainer>
        <BodyContainer>{props.children}</BodyContainer>
      </TableContainer>
    </BorderWrapper>

    <PaginationWrapper>
      <PaginationStats className="">{`Showing ${props.pagination.stats} entries`}</PaginationStats>

      <Pagination
        current={props.pagination.current}
        nbPage={props.pagination.nbPage}
        href={props.pagination.href}
      />
    </PaginationWrapper>
  </>
);

export default DetailTable;
