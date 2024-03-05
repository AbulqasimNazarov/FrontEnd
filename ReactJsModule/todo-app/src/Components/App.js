import React, { createContext, useEffect, useState } from 'react'

import { TodoWrapper } from './TodoWrapper/TodoWrapper'

export const TodoListContext = createContext();

const TodoListProvider = ({ children }) => { 
  const [showTodoList, setShowTodoList] = useState(true)

  const toggleTodoListHandler = () => {
    setShowTodoList(!showTodoList)
  }

  useEffect(() => {
    console.log('update component')
  }, [showTodoList])

  
  return (
    <TodoListContext.Provider value={{showTodoList, toggleTodoListHandler}}>
      {children}
    </TodoListContext.Provider>
  )
}


export const App = () => {
  return (
    <TodoListProvider>
      <div className='todo-app'>
        <button>Toggle todo list show</button>

        <TodoWrapper/>
      </div>
    </TodoListProvider>
  )
}
