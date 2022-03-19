import { ReactNode } from 'react';

import className from 'classnames';
import tw from 'tailwind-styled-components';

import { Logo } from '../Layout';

type ISidebarProps = {
  show?: boolean;
  topLinks: ReactNode;
  middleLinks: ReactNode;
  bottomLinks: ReactNode;
};

const Sidebar = (props: ISidebarProps) => {
  const sidebarClass = className(
    'w-64',
    'inset-y-0',
    'left-0',
    'z-50',
    'bg-white',
    'overflow-y-auto',
    'py-8',
    'px-3',
    'flex',
    'flex-col',
    'fixed',
    'lg:static',
    'transition',
    'duration-300',
    'ease-in-out',
    'transform',
    {
      'translate-x-0': props.show,
      '-translate-x-full': !props.show,
    },
    'lg:translate-x-0',
    'dark:bg-gray-100'
  );

  const TopLink = tw.div`
    flex-1 mt-10
  `;
  const Middlelink = tw.div`
    flex-1 mt-40
  `;
  const Bottomlink = tw.div`
    mt-100
  `;

  return (
    <div className={sidebarClass}>
      <Logo />

      <TopLink>{props.topLinks}</TopLink>
      <Middlelink>{props.middleLinks}</Middlelink>
      <Bottomlink>{props.bottomLinks}</Bottomlink>
    </div>
  );
};

export { Sidebar };
