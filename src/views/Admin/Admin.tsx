import { PageMeta } from "../../components/Layout/Page";
import { AppConfig } from "../../utils/AppConfig";

const Admin: React.FC = () => {
  return (
    <>
      <PageMeta
        pagetitle={AppConfig.title}
        pagedesc={AppConfig.description}
        pagesitename={AppConfig.site_name}
        pagelocale={AppConfig.locale}
      />
      <div>Admin Page</div>
    </>
  );
};
export default Admin;
