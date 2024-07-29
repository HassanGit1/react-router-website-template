import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './comopnents/Home/Home.jsx'
import About from './comopnents/About/About.jsx'
import Contact from './comopnents/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
