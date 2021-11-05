import React from 'react';
import PropTypes from 'prop-types';
import { ToastsStore } from 'react-toasts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import axiosHelper from '../../helpers/axiosHelper';
import style from './style.module.css';

const NewTaskForm = ({ setTasks }) => {
  const history = useHistory();
  const [description, setDescription] = React.useState('');

  const handleNewTask = async () => {
    const data = await axiosHelper.postToApi('/tasks', { description });

    if (data.code) {
      ToastsStore.error(data.message);

      if (data.code.endsWith('token')) {
        localStorage.removeItem('token');
        history.push('/');
      }
    } else {
      setTasks((previousTasks) => [...previousTasks, data]);
      setDescription('');

      ToastsStore.success('Created!');
    }
  };

  return (
    <form className={style.form}>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="new task"
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
  setTasks: PropTypes.func,
}.isRequired;

export default NewTaskForm;
