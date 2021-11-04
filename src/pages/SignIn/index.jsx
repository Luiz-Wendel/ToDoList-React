import React from 'react';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    console.log(email, password);
  };

  return (
    <main>
      <h1 data-testid="signin-title">SignIn</h1>

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
            Log In
          </button>
        </section>
      </form>
    </main>
  );
};

export default SignIn;
