import React, { useEffect, useState } from 'react'
import { TodoListHeader } from '../TodoHeader/TodoHeader'
import { TodoList } from '../TodoList/TodoList'
import { TodoListAddItem } from '../TodoListAddItem/TodoListAddItem'

export const TodoWrapper = ({ showTodoList }) => {
  console.log(showTodoList)

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    console.log('useEffect()')

    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(res => {
        // console.log('fetch')
        const result = res.todos
        setTodoList(result)
      })
  }, [])

  useEffect(() => {
    console.log('update TodoWrapper')
  }, [showTodoList])

  const addTodo = todoItem => {
    const newTodos = [...todoList, todoItem]

    setTodoList(newTodos)
  }

  const deleteTodo = id => {
    const todoIdx = todoList.findIndex(todo => {
      return todo.id === id
    })

    const todoListCopy = [...todoList]

    const newTodoList = [
      ...todoListCopy.slice(0, todoIdx),
      ...todoListCopy.slice(todoIdx + 1),
    ]

    setTodoList(newTodoList)
  }

  const toggleCompleted = id => {
    const indexTodo = todoList.findIndex(todo => {
      return todo.id === id
    })

    const newTodoItem = {
      ...todoList[indexTodo],
      completed: !todoList[indexTodo].completed,
    }

    const newTodoList = [
      ...todoList.slice(0, indexTodo),
      newTodoItem,
      ...todoList.slice(indexTodo + 1),
    ]

    setTodoList(newTodoList)
  }

  return (
    <div>
      <TodoListHeader />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
      <TodoListAddItem addTodoHandler={addTodo} />
    </div>
  )
}