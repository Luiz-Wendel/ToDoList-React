import React from 'react';
import axios from 'axios';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import Header from '../../components/Header';

const { REACT_APP_API_URL } = process.env;

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = async ({ email, password }) => {
    try {
      await axios.post(`${REACT_APP_API_URL}/users`, { email, password });

      ToastsStore.success('Account created! Please sign in.');

      history.push('/');
    } catch (error) {
      ToastsStore.error(error.response.data.message);
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
