import { PageMeta } from '../components/Layout/Page';
import { Section } from '../layout/Section';
import { Shell } from '../template/Shell';
import { Table } from '../template/Table';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <PageMeta
      pagetitle={AppConfig.title}
      pagedesc={AppConfig.description}
      pagesitename={AppConfig.site_name}
      pagelocale={AppConfig.locale}
    />
    <Shell title="Tables">
      <Section>
        <Table />
      </Section>
    </Shell>
  </>
);

export default Index;
