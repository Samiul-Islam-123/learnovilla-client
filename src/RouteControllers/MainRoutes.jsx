import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/AuthPages/Login'
import SignUp from '../Pages/AuthPages/Signup'
import Dashboard from '../Pages/Dashboard'

function MainRoutes() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>

        </Routes>
    </>
  )
}

export default MainRoutes