import React from 'react';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import localStorageHelper from '../../helpers/localStorageHelper';
import Header from '../../components/Header';
import axiosHelper from '../../helpers/axiosHelper';

const SignIn = () => {
  const history = useHistory();

  const handleSignIn = async ({ email, password }) => {
    const data = await axiosHelper.postToApi('/users/signin', { email, password });

    if (data.token) {
      localStorageHelper.set('token', data.token);

      ToastsStore.success('Success!');

      history.push('/tasks');
    } else ToastsStore.error(data.message);
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
