import React from 'react';
import axios from 'axios';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import TableBody from './TableBody';
import TableHead from './TableHead';

const { REACT_APP_API_URL } = process.env;

const TasksTable = ({ token }) => {
  const getTasks = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/tasks`, axiosConfig);

      console.log(data.tasks);

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
      <TableBody />
    </table>
  );
};

TasksTable.propTypes = {
  token: PropTypes.string,
}.isRequired;

export default TasksTable;
