import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Calendar1 from './components/Calendar1'
import Login from './components/Login'




function App() {
  const [count, setCount] = useState(0)

  return (
   <>  
      
        <Routes>
          <Route path="" element={<Login/>} />
          <Route path="/calendar" element={<Calendar1/>} />
        </Routes>

   </>
  )
}

export default App
