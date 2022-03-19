import { ReactNode } from 'react';

import Link from 'next/link';

import { EventsButton } from '../components/Button';
import { SidebarHeader, SidebarLink } from '../components/Shell';
import Topbar from '../components/Shell/Topbar';
import { HomeIcon, ListViewIcon } from '../components/Svg';
import { ToggleDarkmode } from '../components/Toggle';

type IShellProps = {
  title: string;
  children: ReactNode;
};

const homeIcon = <HomeIcon color="blue" width="32px" />;
const projectIcon = <ListViewIcon color="blue" width="32px" />;

const TopSideBarList = [
  {
    title: 'Home',
    link: '/',
    icon: homeIcon,
  },
  {
    title: 'Project',
    link: '/project',
    icon: projectIcon,
  },
  {
    title: 'Market info',
    link: '/market',
    icon: homeIcon,
  },
  {
    title: 'Library',
    link: '/library',
    icon: homeIcon,
  },
  {
    title: 'Community',
    link: '/community',
    icon: homeIcon,
  },
  {
    title: 'Events',
    link: '/events',
    icon: homeIcon,
  },
  {
    title: 'FAQ',
    link: '/faq',
    icon: homeIcon,
  },
];
const Shell = (props: IShellProps) => (
  <SidebarHeader
    title={props.title}
    topLinks={
      <>
        {TopSideBarList.map((value, index) => (
          <Link href={value.link} key={index}>
            <a>
              <SidebarLink icon={value.icon}>{value.title}</SidebarLink>
            </a>
          </Link>
        ))}
      </>
    }
    middleLinks={<EventsButton></EventsButton>}
    bottomLinks={
      <>
        <ToggleDarkmode></ToggleDarkmode>
      </>
    }
    leftContent={
      <>
        <Topbar></Topbar>
      </>
    }
  >
    {props.children}
  </SidebarHeader>
);

export { Shell };
