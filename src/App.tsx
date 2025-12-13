import { useState } from 'react'
import './App.css'

import { Outlet } from "react-router-dom";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";

function App() {

  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
