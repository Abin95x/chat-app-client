import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from '../../pages/userPages/Login'
import { Home } from '../../pages/userPages/Home'
import { Signup } from '../../pages/userPages/Signup'


const UserRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default UserRoute