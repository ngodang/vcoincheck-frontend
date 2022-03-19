import { NextSeo } from 'next-seo';
import Head from 'next/head';
import tw from 'tailwind-styled-components';

const StyledPage = tw.div`
  min-h-screen pt4 pb-4
`;

export const PageMeta: React.FC<{
  pagetitle?: string;
  pagedesc?: string;
  pagecanonical?: string;
  pagelocale?: string;
  pagesitename?: string;
}> = ({ pagetitle, pagedesc, pagecanonical, pagelocale, pagesitename }) => {
  return (
    <>
      <Head>
        <title>{pagetitle}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
        <link rel="icon" href="/favicon-32x32.png" key="icon32" />
        <link rel="icon" href="/favicon-16x16.png" key="icon16" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <NextSeo
        title={pagetitle}
        description={pagedesc}
        canonical={pagecanonical}
        openGraph={{
          title: pagetitle,
          description: pagedesc,
          url: pagecanonical,
          locale: pagelocale,
          site_name: pagesitename,
        }}
      />
    </>
  );
};

interface PageProps {
  title: string;
  description: string;
  canonical?: string;
  locale?: string;
  sitename: string;
}

const Page: React.FC<PageProps> = ({
  title,
  description,
  canonical,
  locale,
  sitename,
  children,
  ...props
}) => {
  return (
    <>
      <PageMeta
        pagetitle={title}
        pagedesc={description}
        pagesitename={sitename}
        pagecanonical={canonical}
        pagelocale={locale}
      />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  );
};

export default Page;
