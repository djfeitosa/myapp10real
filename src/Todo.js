import { useState } from "react";
import "./style.css";

function generateId() {
  return Math.floor(Math.random() * 100);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          placeholder="New Todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <ul className="todo-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button
                type="button"
                className="close"
                onClick={() => removeTodo(id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
