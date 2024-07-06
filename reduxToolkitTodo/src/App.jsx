import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <h1>Todo aur redux-toolkit</h1>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
