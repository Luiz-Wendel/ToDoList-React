import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastsStore } from 'react-toasts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const { REACT_APP_API_URL } = process.env;

const NewTaskForm = ({ token, setTasks }) => {
  const [description, setDescription] = React.useState('');

  const handleNewTask = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const { data } = await axios.post(`${REACT_APP_API_URL}/tasks`, { description }, axiosConfig);

      setTasks((previousTasks) => [...previousTasks, data]);

      ToastsStore.success('Created!');
    } catch (error) {
      ToastsStore.error(error.response.data.message);
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
