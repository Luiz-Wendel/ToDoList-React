import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastsStore } from 'react-toasts';

const { REACT_APP_API_URL } = process.env;

const NewTaskForm = ({ token }) => {
  const [description, setDescription] = React.useState('');

  const handleNewTask = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      await axios.post(`${REACT_APP_API_URL}/tasks`, { description }, axiosConfig);

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

      <button type="button" onClick={handleNewTask}>Create</button>
    </form>
  );
};

NewTaskForm.propTypes = {
  token: PropTypes.string,
}.isRequired;

export default NewTaskForm;
