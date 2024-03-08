import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Signup/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
