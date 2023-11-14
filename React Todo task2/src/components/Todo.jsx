/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Todo({ todo, onDelete }) {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheckBox = () => {
    setCompleted(!completed);
  };


  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <>
      <li className="todo-li">
        <input type="checkbox" checked={completed} onChange={(id)=>handleCheckBox(todo.id)} />
        <li
          style={{
            color: "black",
            textDecoration: completed ? "line-through" : null,
          }}
          className="todosLi"
        >
          {todo.task}
        </li>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
}

export default Todo;
