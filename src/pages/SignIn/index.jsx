import React from 'react';
import { ToastsStore } from 'react-toasts';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import localStorageHelper from '../../helpers/localStorageHelper';
import Header from '../../components/Header';

const { REACT_APP_API_URL } = process.env;

const SignIn = () => {
  const history = useHistory();

  const handleSignIn = async ({ email, password }) => {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/users/signin`, { email, password });

      localStorageHelper.set('token', response.data.token);

      ToastsStore.success('Success!');

      history.push('/tasks');
    } catch (error) {
      ToastsStore.error(error.response.data.message);
    }
  };

  return (
    <main>
      <Header />

      <h1 data-testid="signin-title">SignIn</h1>

      <UserForm handleSubmit={handleSignIn} />
    </main>
  );
};

export default SignIn;
