import React from 'react';

const SignIn = () => {
  const [email, setEmail] = React.useState('');

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
        </section>
      </form>
    </main>
  );
};

export default SignIn;
