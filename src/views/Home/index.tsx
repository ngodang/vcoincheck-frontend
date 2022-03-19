import { PageMeta } from '../../components/Layout/Page';
import { Section } from '../../layout/Section';
import { Shell } from '../../layout/Shell';
import { AppConfig } from '../../utils/AppConfig';
import Banner from '../Banner/Banner';
import { TopProject } from '../Project';

const Home: React.FC = () => {
  return (
    <>
      <PageMeta
        pagetitle={AppConfig.title}
        pagedesc={AppConfig.description}
        pagesitename={AppConfig.site_name}
        pagelocale={AppConfig.locale}
      />
      <Shell title="Home">
        <Section>
          <Banner />
        </Section>
        <Section>
          <TopProject />
        </Section>
      </Shell>
    </>
  );
};
export default Home;
