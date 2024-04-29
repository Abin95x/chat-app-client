import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Landing } from '../../pages/userPages/Landing'
import { Login } from '../../pages/userPages/Login'
import { Signup } from '../../pages/userPages/Signup'


const UserRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default UserRoute