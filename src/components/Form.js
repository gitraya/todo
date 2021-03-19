import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name) addTodo(name);
    setName('');
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          className="input-text"
          placeholder="add details"
          value={name}
          onChange={handleChange}
        />
        <input type="submit" className="button-submit" value="Add" />
      </div>
    </form>
  );
};

export default Form;
