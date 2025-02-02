import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

{/*This is our Main file, from here our Frontend starts. First we import our App, also all needed Parts from React, like Strict mode and create root
  Inside of StrictMode we wrap our App with BrowserRouter, so we can use the Router in our App.
  Inside of the App component we have the the other components nested.
  We render the App into the root element in the index.html file
  Via the imported index.css file we can generally style our App.
  but we also have other css files for other components, to style them individually.
  */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)



