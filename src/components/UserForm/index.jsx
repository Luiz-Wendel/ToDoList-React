import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import style from './style.module.css';

const UserForm = ({ handleSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const signInLink = (
    <p>
      {'Already have an account? '}
      <Link to="/">Sign In</Link>
    </p>
  );

  const signUpLink = (
    <p>
      {'Don\'t have an account? '}
      <Link to="/signup">Sign Up</Link>
    </p>
  );

  return (
    <form className={style.form}>
      <section className={style.inputContainer}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@domain.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </section>
      <section className={style.buttonContainer}>
        <button type="button" onClick={() => handleSubmit({ email, password })}>
          {
            history.location.pathname === '/' ? 'Sign In' : 'Sign Up'
          }
        </button>
      </section>
      <section className={style.extraInfo}>
        {
          history.location.pathname === '/'
            ? signUpLink
            : signInLink
        }
      </section>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;

export default UserForm;
