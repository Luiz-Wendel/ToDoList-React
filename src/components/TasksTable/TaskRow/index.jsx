import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import dateHelper from '../../../helpers/dateHelper';

const TaskRow = ({ number, task }) => (
  <tr>
    <td>{number}</td>
    <td>{task.description}</td>
    <td>{task.status}</td>
    <td>{dateHelper.getEuropeanDate(task.createdAt)}</td>
    <td>
      <button type="button" title="Remove task">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </td>
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
