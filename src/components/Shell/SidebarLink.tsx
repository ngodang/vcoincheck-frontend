import { ReactElement } from 'react';

import tw from 'tailwind-styled-components';

type ISidebarLinkProps = {
  icon: ReactElement;
  children: string;
};

const SidebarLinkWrapper = tw.div`
  sidebar-link flex items-center text-lg text-gray-800 font-semibold px-2 py-2 rounded-lg hover:bg-primary-200 dark:text-primary-100
`;

const SidebarLink = (props: ISidebarLinkProps) => (
  <SidebarLinkWrapper>
    {props.icon}
    {props.children}

    <style jsx>
      {`
        .sidebar-link :global(svg) {
          @apply stroke-2 stroke-current text-primary-500 h-6 w-6 mr-1;
        }
      `}
    </style>
  </SidebarLinkWrapper>
);

export default SidebarLink;
