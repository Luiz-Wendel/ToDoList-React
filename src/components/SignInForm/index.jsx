import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import localStorageHelper from '../../helpers/localStorageHelper';

const { REACT_APP_API_URL } = process.env;

const SignInForm = ({ ToastsStore }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/users/signin`, { email, password });

      localStorageHelper.set('token', response.data.token);

      // TODO: redirect to tasks page
    } catch (error) {
      ToastsStore.error(error.response.data.message);
    }
  };

  return (
    <form>
      <section>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@domain.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </section>
      <section>
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </section>
    </form>
  );
};

SignInForm.propTypes = {
  ToastsStore: PropTypes.shape({
    error: PropTypes.func,
  }),
}.isRequired;

export default SignInForm;
