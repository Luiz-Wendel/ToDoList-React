import React from 'react';
import { useHistory } from 'react-router-dom';
import { ToastsStore } from 'react-toasts';
import Header from '../../components/Header';
import localStorageHelper from '../../helpers/localStorageHelper';

const Tasks = () => {
  const [token, setToken] = React.useState('');

  const history = useHistory();

  React.useEffect(() => {
    setToken(localStorageHelper.get('token'));
  }, []);

  React.useEffect(() => {
    if (token === null) {
      ToastsStore.error('Please sign in!');

      history.push('/');
    }
  }, [token]);

  return (
    <main>
      <Header />

      <h1>Tasks</h1>
    </main>
  );
};

export default Tasks;
