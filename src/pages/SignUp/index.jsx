import React from 'react';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import Header from '../../components/Header';
import axiosHelper from '../../helpers/axiosHelper';

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = async ({ email, password }) => {
    const data = await axiosHelper.postToApi('/users', { email, password });

    if (data.code) ToastsStore.error(data.message);
    else {
      ToastsStore.success('Account created! Please sign in.');

      history.push('/');
    }
  };

  return (
    <main>
      <Header />

      <h1>SignUp</h1>

      <UserForm handleSubmit={handleSignUp} />
    </main>
  );
};

export default SignUp;
