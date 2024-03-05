import React from 'react'

export const TodoListItem = ({
  todo,
  deleteTodo,
  id,
  toggleCompleted,
  completed,
}) => {
  const deleteTodoHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className='todo-item'>
      <span
        style={{
          color: completed ? 'red' : '',
        }}
      >
        {todo}
      </span>{' '}
      <button
        onClick={() => {
          toggleCompleted(id)
        }}
      >
        completed
      </button>{' '}
      <button onClick={deleteTodoHandler}>X</button>
    </li>
  )
}