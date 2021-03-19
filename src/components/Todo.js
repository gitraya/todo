const Todo = ({ name, id, completed, toggleCompletedTodo }) => {
  return (
    <div className="todo">
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={completed}
        onChange={() => {
          toggleCompletedTodo(id);
        }}
        id={id}
      />
      <label className="label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default Todo;
