/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from "uuid";

function TodoListForm({addTodo , todos}) {
  console.log(todos);
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
  function handleTaskInput(e) {
    setTodo({...todo,task: e.target.value})
  }
  function handleSunmit(e) {
    e.preventDefault()
    if (todo.task.trim()) {
      addTodo({...todo, id:uuidv4()})

      setTodo({...todo,task:""})
    }
  }

  function handleCompleted(e) {
    e.preventDefault()
    
  }
  return (
    <>
      <form onSubmit={handleSunmit}>
        <button onClick={handleCompleted}>Completed</button>
        <input 
        name = "task"
        value={todo.task}
        onChange={handleTaskInput}
        type="text" placeholder="enter item"/>
        <button type="submit">submit</button>
      </form>
    </>
  );
}


TodoListForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
export default TodoListForm;
