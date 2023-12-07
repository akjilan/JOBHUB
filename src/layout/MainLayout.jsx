import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import '../App.css';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

    </>
  )
}

export default MainLayout