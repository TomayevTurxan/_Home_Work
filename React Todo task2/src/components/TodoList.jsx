/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

function TodoList({todos ,onDelete}) {
  console.log(todos);
  return(
    <>
      <ul className='todo-up'>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>    
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default TodoList