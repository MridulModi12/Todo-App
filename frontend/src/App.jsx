import { useEffect, useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
        .then(async function(res) {
          const json = await res.json()
          setTodos(json.todos)
        }
      )
    },10000)
  }, [])

  return (
    <div>
      <CreateToDo></CreateToDo>
      <Todos todos={todos}></Todos>
      {/* <Todos todos={[
        {
          title: "abcd",
          description: "hello",
          completed: "false"
        },
        {
          title: "abcdefg",
          description: "hello there",
          completed: "true"
        }
      ]}></Todos> */}
    </div>
  )
}

export default App
