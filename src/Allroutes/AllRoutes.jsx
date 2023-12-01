import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { SingleMovie } from '../components/SingleMovie'
import { Favorite } from '../components/Favorite'
import SignUp from '../components/SignUp'
import Login from '../components/login'

export const AllRoutes = () => {

  return (
    <div>
        <Routes>
            <Route path='/contact' element={<Home/>}/>
            <Route path='/contact/:id' element={<SingleMovie/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
