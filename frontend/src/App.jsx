import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Calendar1 from './components/Calendar1'
import Login from './components/Login'

{/*This is our App, that will be loaded into our main file.
  We import the needed parts from react, like useState, Routes and Route. and also our components Calendar1 and Login.
  with the imported app.css file we can style our App.
  */}



function App() {

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
