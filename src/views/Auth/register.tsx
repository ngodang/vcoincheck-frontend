import { PageMeta } from '../../components/Layout/Page';
import { AppConfig } from '../../utils/AppConfig';
import {makeStyles, Container, TextField, Button,} from "@material-ui/core";
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
  submitButton: {
    marginTop: theme.spacing(0),
  },
}));

const RegisterPage: React.FC = () => {
// function RegisterPage () {
  const { submitButton } = useStyles();
  // const { data, setData } = useState(1)  

  fetch(" http://192.168.1.225:6868/call/adduser",
    {method: "POST",
    })
    .then(res => {
      console.log(res)
    })
    .then(data => {
      console.log(data)
    })
    
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
        
        <div className="Namepage">Register</div>
        <TextField variant="outlined" margin="normal" type="email" label="Email" fullWidth required/>
        <TextField variant="outlined" margin="normal" label="Username" fullWidth required />
        <TextField variant="outlined" margin="normal" label="Password" type="password" fullWidth required />
        <div className="btn-sign">
          <Button id="register-btn" type="submit" variant="contained" color="primary" className={submitButton}>
            Register
          </Button>
          <Link href='/login'>
            <Button  id="signup-btn" type="submit" variant="contained" color="secondary" >
              Login
            </Button>
          </Link>
          <Link href='/forgot'>
            <div className="Forgot">Forgot your password ?</div>
          </Link>
        </div>
      </form>
    </Container>
    </>
  );
};
export default RegisterPage;
