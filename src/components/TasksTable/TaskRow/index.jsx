import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import dateHelper from '../../../helpers/dateHelper';
import axiosHelper from '../../../helpers/axiosHelper';
import statusList from '../../../schemas/statusSchema';

const TaskRow = ({ number, task, setTasks }) => {
  const history = useHistory();
  const {
    _id: id, description, status, createdAt,
  } = task;

  const handleRemoveTask = async () => {
    const data = await axiosHelper.deleteFromApi(`/tasks/${id}`);

    if (data && data.code) {
      ToastsStore.error(data.message);

      if (data.code.endsWith('token')) {
        localStorage.removeItem('token');
        history.push('/');
      }
    } else {
      ToastsStore.success('Task removed!');

      setTasks((previousTasks) => previousTasks.filter(({ _id: taskId }) => taskId !== id));
    }
  };

  const handleStatusChange = () => {};

  return (
    <tr>
      <td>{number}</td>
      <td>{description}</td>
      <td>
        <select name="status" id="status" value={status} onChange={handleStatusChange}>
          {
            statusList.map((availableStatus) => (
              <option key={availableStatus} value={availableStatus}>{availableStatus}</option>
            ))
          }
        </select>
      </td>
      <td>{dateHelper.getEuropeanDate(createdAt)}</td>
      <td>
        <button type="button" title="Remove task" onClick={handleRemoveTask}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

TaskRow.propTypes = {
  number: PropTypes.number,
  task: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.number,
  }),
  setTasks: PropTypes.func,
}.isRequired;

export default TaskRow;
