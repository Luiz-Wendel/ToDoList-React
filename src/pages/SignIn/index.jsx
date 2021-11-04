import React from 'react';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import SignInForm from '../../components/SignInForm';

const SignIn = () => (
  <main>
    <ToastsContainer
      store={ToastsStore}
      position={ToastsContainerPosition.TOP_CENTER}
    />

    <h1 data-testid="signin-title">SignIn</h1>

    <SignInForm ToastsStore={ToastsStore} />
  </main>
);

export default SignIn;
