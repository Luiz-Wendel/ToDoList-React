import React from 'react';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import TaskRow from './TaskRow';
import TableHead from './TableHead';
import axiosHelper from '../../helpers/axiosHelper';
import localStorageHelper from '../../helpers/localStorageHelper';

const TasksTable = ({ token, tasks, setTasks }) => {
  const history = useHistory();

  const getTasks = async () => {
    const data = await axiosHelper.getFromApi('/tasks');

    if (data.tasks) setTasks(data.tasks);
    else {
      ToastsStore.error(data.message);

      if (data.code.endsWith('token')) {
        localStorageHelper.set('token', '');
        history.push('/');
      }
    }
  };

  React.useEffect(() => {
    if (token) getTasks();
  }, [token]);

  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {
          tasks && tasks.map((task, index) => (
            <TaskRow key={task.createdAt} number={index + 1} task={task} />
          ))
        }
      </tbody>
    </table>
  );
};

TasksTable.propTypes = {
  token: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  setTasks: PropTypes.func,
}.isRequired;

export default TasksTable;
