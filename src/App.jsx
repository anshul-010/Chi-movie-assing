import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Sidebar } from './components/Sidebar'
import { AllRoutes } from './Allroutes/AllRoutes'

function App() {

  return (
    <>
        {/* <Home/> */}
        <AllRoutes/>
    </>
  )
}

export default App
