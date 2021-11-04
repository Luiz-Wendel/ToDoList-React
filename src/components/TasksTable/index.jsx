import React from 'react';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow';
import TableHead from './TableHead';
import axiosHelper from '../../helpers/axiosHelper';

const TasksTable = ({ token, tasks, setTasks }) => {
  const getTasks = async () => {
    const data = await axiosHelper.getFromApi('/tasks', token);

    if (data.tasks) setTasks(data.tasks);
    else ToastsStore.error(data.message);
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
            <TaskRow key={task.createdAt} number={index + 1} task={task} token={token} />
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
