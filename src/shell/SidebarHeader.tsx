import { ReactNode } from 'react';

import className from 'classnames';

import { ToggleMenuButton } from '../components/Button/ToggleMenuButton';
import { useMenu } from '../utils/Navigation';
import { Sidebar } from './Sidebar';

type ISidebarHeaderProps = {
  topLinks: ReactNode;
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

  return (
    <div className="antialiased text-gray-600 flex h-screen">
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
        bottomLinks={props.bottomLinks}
      />

      <div className="bg-primary-100 flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white flex items-center justify-between py-3 px-3 sm:px-5 lg:px-6">
          <div className="lg:hidden mr-2">
            <ToggleMenuButton onClick={handleToggleMenu} />
          </div>

          <div className="text-lg font-bold text-gray-900">{props.title}</div>

          <div className="ml-auto">{props.leftContent}</div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="py-8">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export { SidebarHeader };
