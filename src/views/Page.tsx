import { title } from 'process';

import tw from 'tailwind-styled-components';

import { PageMeta } from '../components/Layout/Page';
import { Shell } from '../layout/Shell';

const StyledPage = tw.div`
  items-center flex-col	w-full p-[16px] h-24 min-h-0 md:min-h-full
`;

interface PageProps {
  children: any;
}

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <Shell title={title}>
        <StyledPage {...props}>{children}</StyledPage>
      </Shell>
    </>
  );
};

export default Page;
