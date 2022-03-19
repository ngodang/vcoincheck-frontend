import getConfig from 'next/config';
import Router from 'next/router';
import { BehaviorSubject } from 'rxjs';

import { fetchWrapper } from '../helpers';

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user') as string)
);

const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}/call`;

async function login(username: string, password: string) {
  var body = {
    username,
    password
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  
  const user = await fetch(`${baseUrl}/login`, requestOptions);

  localStorage.setItem('user', JSON.stringify(user));

  // const user = await fetchWrapper.post(`${baseUrl}/login`, {
  //   username: username,
  //   password: password
  // });
  // localStorage.setItem('user', JSON.stringify(response));
  return user;
}
function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login');
}

export const UserService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
};
