import React from 'react';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import axios from 'axios';
import UserForm from '../../components/UserForm';
import localStorageHelper from '../../helpers/localStorageHelper';

const { REACT_APP_API_URL } = process.env;

const handleSignIn = async ({ email, password }) => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/users/signin`, { email, password });

    localStorageHelper.set('token', response.data.token);

    // TODO: redirect to tasks page
  } catch (error) {
    ToastsStore.error(error.response.data.message);
  }
};

const SignIn = () => (
  <main>
    <ToastsContainer
      store={ToastsStore}
      position={ToastsContainerPosition.TOP_CENTER}
    />

    <h1 data-testid="signin-title">SignIn</h1>

    <UserForm handleSubmit={handleSignIn} />
  </main>
);

export default SignIn;
