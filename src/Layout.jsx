import React from 'react'
import Header from './comopnents/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './comopnents/Footer/Footer'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
