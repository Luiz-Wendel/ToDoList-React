import React from 'react';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import localStorageHelper from '../../helpers/localStorageHelper';
import Header from '../../components/Header';
import axiosHelper from '../../helpers/axiosHelper';
import Footer from '../../components/Footer';
import style from './style.module.css';

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
    <>
      <Header />

      <main className={style.container}>

        <section className={style.formContainer}>
          <h1 className={style.title} data-testid="signin-title">SignIn</h1>

          <UserForm handleSubmit={handleSignIn} />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default SignIn;
