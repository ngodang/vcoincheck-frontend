import { ReactNode } from 'react';

import className from 'classnames';
import tw from 'tailwind-styled-components';

import { useMenu } from '../../utils/Navigation';
import { ToggleMenuButton } from '../Button/ToggleMenuButton';
import { AutoCompleteSearch } from '../Search';
import { Sidebar } from './Sidebar';
import { TopProject } from './TopProject';

type ISidebarHeaderProps = {
  topLinks: ReactNode;
  middleLinks: ReactNode;
  bottomLinks: ReactNode;
  title: string;
  leftContent: ReactNode;
  children: ReactNode;
};

const SidebarHeader = (props: ISidebarHeaderProps) => {
  const { showMenu, handleToggleMenu, handleClose } = useMenu();

  const clickableBgClass = className(
    'fixed',
    'w-full',
    'h-full',
    'z-40',
    'inset-0',
    'bg-black',
    'opacity-50',
    'cursor-default',
    {
      hidden: !showMenu,
    },
    'lg:hidden'
  );

  const SidebarContainer = tw.div`
    antialiased text-gray-600 flex h-screen
  `;
  const ContentWrapper = tw.div`
    bg-primary-100 flex-1 flex flex-col overflow-hidden
  `;
  const HeaderWrapper = tw.head`
    h-16 bg-white flex items-center justify-between py-3 px-3 sm:px-5 lg:px-6 dark:bg-gray-100 dark:text-white-100
  `;
  const ToggleWrapper = tw.div`
    lg:hidden mr-2
  `;
  const RightContentWrapper = tw.div`
    ml-auto
  `;
  const ChildrenWrapper = tw.div`
    flex-1 overflow-y-auto overflow-x-hidden
  `;
  const ProjectWrapper = tw.div`
    px-3 sm:px-5 lg:px-6
  `;
  const SearchWrapper = tw.div`
    px-3 sm:px-5 lg:px-6
  `;

  return (
    <SidebarContainer>
      <button
        className={clickableBgClass}
        onClick={handleClose}
        aria-label="Close"
        type="button"
        tabIndex={-1}
      />

      <Sidebar
        show={showMenu}
        topLinks={props.topLinks}
        middleLinks={props.middleLinks}
        bottomLinks={props.bottomLinks}
      />

      <ContentWrapper>
        <HeaderWrapper>
          <ToggleWrapper>
            <ToggleMenuButton onClick={handleToggleMenu} />
          </ToggleWrapper>
          <ProjectWrapper>
            <TopProject></TopProject>
          </ProjectWrapper>
          <SearchWrapper>
            <AutoCompleteSearch />
          </SearchWrapper>
          <RightContentWrapper>{props.leftContent}</RightContentWrapper>
        </HeaderWrapper>

        <ChildrenWrapper>
          <div className="py-8">{props.children}</div>
        </ChildrenWrapper>
      </ContentWrapper>
    </SidebarContainer>
  );
};

export default SidebarHeader;
