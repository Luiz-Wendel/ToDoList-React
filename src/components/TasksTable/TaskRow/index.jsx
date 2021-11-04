import React from 'react';
import PropTypes from 'prop-types';

const TaskRow = ({ number, task }) => (
  <tr>
    <td>{number}</td>
    <td>{task.description}</td>
    <td>{task.status}</td>
    <td>{task.createdAt}</td>
  </tr>
);

TaskRow.propTypes = {
  number: PropTypes.number,
  task: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.number,
  }),
}.isRequired;

export default TaskRow;
