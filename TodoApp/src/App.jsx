import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
function App() {
  const [todos, setTodos]  = useState([])

  return (
    <>
      <ToDoList/>
      
    </>
  )
}

export default App
