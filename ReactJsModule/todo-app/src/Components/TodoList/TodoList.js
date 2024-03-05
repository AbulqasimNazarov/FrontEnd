import React from 'react'
import { TodoListItem } from '../TodoItem/TodoItem'

import './style.scss'

export const TodoList = ({ todoList, deleteTodo, toggleCompleted }) => {
  return (
    <ul className='todo-list'>
      {todoList.map(({ id, todo, completed }) => {
        return (
          <TodoListItem
            key={id}
            todo={todo}
            id={id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            completed={completed}
          />
        )
      })}
    </ul>
  )
}