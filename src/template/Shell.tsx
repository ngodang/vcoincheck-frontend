import { ReactNode } from 'react';

import Link from 'next/link';

import { Button } from '../components/Button/Button';
import { SidebarHeader } from '../shell/SidebarHeader';
import { SidebarLink } from '../shell/SidebarLink';

type IShellProps = {
  title: string;
  children: ReactNode;
};

const Shell = (props: IShellProps) => (
  <SidebarHeader
    title={props.title}
    topLinks={
      <>
        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                </svg>
              }
            >
              Dashboard
            </SidebarLink>
          </a>
        </Link>

        <Link href="/tables">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M4 10h16M10 4v16" />
                </svg>
              }
            >
              Tables
            </SidebarLink>
          </a>
        </Link>

        <Link href="/forms">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M4 10h16M10 4v16" />
                </svg>
              }
            >
              Forms
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page 1
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page 2
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page 3
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page 4
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page 5
            </SidebarLink>
          </a>
        </Link>
      </>
    }
    bottomLinks={
      <>
        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3a3 3 0 00-3 3v12a3 3 0 003 3M6 3a3 3 0 013 3v12a3 3 0 01-3 3M13 7h7a1 1 0 011 1v8a1 1 0 01-1 1h-7M5 7H4a1 1 0 00-1 1v8a1 1 0 001 1h1M17 12h.01M13 12h.01" />
                </svg>
              }
            >
              Custom Page
            </SidebarLink>
          </a>
        </Link>

        <Link href="/">
          <a>
            <SidebarLink
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
              }
            >
              Sign out
            </SidebarLink>
          </a>
        </Link>
      </>
    }
    leftContent={
      <>
        <Link href="/">
          <a>
            <Button>Need Help?</Button>
          </a>
        </Link>
      </>
    }
  >
    {props.children}
  </SidebarHeader>
);

export { Shell };
