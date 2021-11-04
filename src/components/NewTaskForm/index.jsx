import React from 'react';
import PropTypes from 'prop-types';
import { ToastsStore } from 'react-toasts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import axiosHelper from '../../helpers/axiosHelper';
import localStorageHelper from '../../helpers/localStorageHelper';

const NewTaskForm = ({ token, setTasks }) => {
  const history = useHistory();
  const [description, setDescription] = React.useState('');

  const handleNewTask = async () => {
    const data = await axiosHelper.postToApi('/tasks', { description }, token);

    if (data.code) {
      ToastsStore.error(data.message);

      if (data.code.endsWith('token')) {
        localStorageHelper.set('token', '');
        history.push('/');
      }
    } else {
      setTasks((previousTasks) => [...previousTasks, data]);

      ToastsStore.success('Created!');
    }
  };

  return (
    <form>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="task..."
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />

      <button type="button" onClick={handleNewTask}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

NewTaskForm.propTypes = {
  token: PropTypes.string,
  setTasks: PropTypes.func,
}.isRequired;

export default NewTaskForm;
