/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Todo from "./Todo.jsx";
import TodoListForm from "./TodoListForm.jsx";
import TodoList from "./TodoList.jsx"
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    console.log("Adding Todo:", todo);
    setTodos([todo, ...todos])
  }
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
    <>
      <div className="appTodo">
        <div className="appHeader">
          <p>React Todo</p>
          <TodoListForm addTodo={addTodo} />
          <TodoList todos={todos}  onDelete={deleteTodo}/>
        </div>
      </div>
    </>
  );
}

export default App;
