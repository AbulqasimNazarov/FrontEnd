import React, { useState } from 'react'

export const TodoListAddItem = ({ addTodoHandler }) => {
  // props.addTodoHandler

  const [input, setInput] = useState('')

  const formSubmit = e => {
    e.preventDefault()
    addTodoHandler({ id: 40000, todo: input })
  }

  const inputHander = e => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={formSubmit} className='todo-list-add-form'>
      <input type='text' value={input} onChange={inputHander} />
      <button>Ок</button>
    </form>
  )
}