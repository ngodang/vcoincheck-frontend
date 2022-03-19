import { Container, TextField } from '@material-ui/core';

import { PageMeta } from '../../components/Layout/Page';
import { AppConfig } from '../../utils/AppConfig';

const ForgotPage: React.FC = () => {
  return (
    <>
      <PageMeta
        pagetitle={AppConfig.title}
        pagedesc={AppConfig.description}
        pagesitename={AppConfig.site_name}
        pagelocale={AppConfig.locale}
      />
      <Container maxWidth="xs">
        <form>
          <div className="Namepage">Forgot</div>
          <TextField
            variant="outlined"
            margin="normal"
            type="email"
            label="Send email"
            fullWidth
            required
          />
          <div className="btn-sign"></div>
        </form>
      </Container>
    </>
  );
};
export default ForgotPage;
