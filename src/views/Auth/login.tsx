import error from 'next/error';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import tw from 'tailwind-styled-components';

import { PageMeta } from '../../components/Layout/Page';
import { AlertService, UserService } from '../../Service';
import { AppConfig } from '../../utils/AppConfig';

const LoginLayout = tw.div`
  flex items-center justify-center min-h-screen dark:bg-gray-100
`;
const LoginWrapper = tw.div`
  px-8 py-6 mt-4 text-left dark:bg-white-100 shadow-lg border rounded-md border-gray-100
`;

interface FormLogin {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormLogin>();
  const { errors } = formState;

  const onHandleSubmit = handleSubmit(({ username, password }) => {
    UserService.login(username, password)
      .then((res) => {
        res.json().then((data)=>{
            if (data.errorcode == 0){
              Router.push('/');
            }else{
              alert(data.messagedetail);
            }
        })
      })
      .catch(AlertService.error);
  });

  return (
    <>
      <PageMeta
        pagetitle={AppConfig.title}
        pagedesc={AppConfig.description}
        pagesitename={AppConfig.site_name}
        pagelocale={AppConfig.locale}
      />
      <LoginLayout>
        <LoginWrapper>
          <h3 className="text-2xl font-bold text-center text-gray-600">
            Login to your account
          </h3>
          <form action="" className="space-y-6" onSubmit={onHandleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Username
                </label>
                <input
                  {...register('username', {
                    required: true,
                    minLength: 4,
                    maxLength: 18,
                  })}
                  name="username"
                  type="text"
                  autoComplete="new-username"
                  placeholder="Username"
                  style={{ borderColor: errors.username ? 'red' : '' }}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors?.username && (
                  <span className="text-xs tracking-wide text-red-600">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  {...register('password')}
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </LoginWrapper>
      </LoginLayout>
    </>
  );
};
export default LoginPage;
