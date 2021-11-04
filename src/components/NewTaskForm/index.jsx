import React from 'react';

const NewTaskForm = () => {
  const [description, setDescription] = React.useState('');

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

      <button type="button">Create</button>
    </form>
  );
};

export default NewTaskForm;
