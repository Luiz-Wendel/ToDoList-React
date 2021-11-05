import React from 'react';
import { useHistory } from 'react-router-dom';
import { ToastsStore } from 'react-toasts';
import Header from '../../components/Header';
import localStorageHelper from '../../helpers/localStorageHelper';
import jwt from '../../helpers/jwt';
import NewTaskForm from '../../components/NewTaskForm';
import TasksTable from '../../components/TasksTable';
import Footer from '../../components/Footer';

const Tasks = () => {
  const [token, setToken] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
    setToken(localStorageHelper.get('token'));
  }, []);

  React.useEffect(() => {
    if (token === null) {
      ToastsStore.error('Please sign in!');

      history.push('/');
    } else if (token.length > 0) {
      try {
        jwt.validate(token);
      } catch (error) {
        ToastsStore.error('Invalid token! Please sign in again.');

        history.push('/');
      }
    }
  }, [token]);

  return (
    <main>
      <Header />

      <h1>Tasks</h1>

      <NewTaskForm setTasks={setTasks} />

      <TasksTable token={token} tasks={tasks} setTasks={setTasks} />

      <Footer />
    </main>
  );
};

export default Tasks;
