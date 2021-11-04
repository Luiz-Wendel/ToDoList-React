import React from 'react';
import axios from 'axios';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import TableBody from './TableBody';
import TableHead from './TableHead';

const { REACT_APP_API_URL } = process.env;

const TasksTable = ({ token, tasks, setTasks }) => {
  const getTasks = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/tasks`, axiosConfig);

      setTasks(data.tasks);

      ToastsStore.success('Created!');
    } catch (error) {
      ToastsStore.error(error.response.data.message);
    }
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  return (
    <table>
      <TableHead />
      <TableBody tasks={tasks} />
    </table>
  );
};

TasksTable.propTypes = {
  token: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  setTasks: PropTypes.func,
}.isRequired;

export default TasksTable;
