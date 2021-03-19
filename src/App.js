import { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import { nanoid } from 'nanoid';
const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = ({ dataTodos }) => {
  const [todos, setTodos] = useState(dataTodos);
  const [filter, setFilter] = useState('All');

  const addTodo = (name) => {
    const newTodo = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const remainingTodo = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodo);
  };

  const deleteCompletedTodos = () => {
    const remainingTodo = todos.filter((todo) => false === todo.completed);
    setTodos(remainingTodo);
  };

  const toggleCompletedTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  // Displaying todo
  const todoList = todos.filter(FILTER_MAP[filter]).map((todo) => {
    return (
      <Todo
        name={todo.name}
        id={todo.id}
        key={todo.id}
        completed={todo.completed}
        toggleCompletedTodo={toggleCompletedTodo}
        filter={filter}
        deleteTodo={deleteTodo}
      />
    );
  });

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      name={name}
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="App">
      <header className="col-6">
        <h1>#todo</h1>
      </header>
      <main>
        <div className="container">
          <div className="filter-container">{filterList}</div>
          <div
            className="form-container"
            style={{ margin: filter !== 'Completed' ? null : '0px' }}
          >
            {filter !== 'Completed' ? <Form addTodo={addTodo} /> : null}
          </div>
          <div className="todos-container">{todoList}</div>
          {filter !== 'Completed' ? null : (
            <div className="del-all-container">
              <button type="submit" onClick={deleteCompletedTodos}>
                <i class="material-icons-round">delete_outline</i> delete all
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
