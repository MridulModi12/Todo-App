import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CreateToDo></CreateToDo>
      </div>
    </>
  )
}

export default App
