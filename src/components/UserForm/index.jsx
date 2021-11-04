import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const UserForm = ({ handleSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

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
        <button type="button" onClick={() => handleSubmit({ email, password })}>
          {
            history.location.pathname === '/' ? 'Sign In' : 'Sign Up'
          }
        </button>
      </section>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;

export default UserForm;
