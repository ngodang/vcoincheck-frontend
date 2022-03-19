import { PageMeta } from '../components/Layout/Page';
import { Section } from '../layout/Section';
import { Form } from '../template/Form';
import { Shell } from '../template/Shell';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <PageMeta
      pagetitle={AppConfig.title}
      pagedesc={AppConfig.description}
      pagesitename={AppConfig.site_name}
      pagelocale={AppConfig.locale}
    />
    <Shell title="Forms">
      <Section>
        <Form />
      </Section>
    </Shell>
  </>
);

export default Index;
