import React from 'react';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import Header from '../../components/Header';
import axiosHelper from '../../helpers/axiosHelper';
import Footer from '../../components/Footer';
import style from './style.module.css';

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
    <>
      <Header />

      <main className={style.container}>

        <section className={style.formContainer}>
          <h1 className={style.title}>SignUp</h1>

          <UserForm handleSubmit={handleSignUp} />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default SignUp;
