import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/AuthPages/Login'
import SignUp from '../Pages/AuthPages/Signup'

function MainRoutes() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>

        </Routes>
    </>
  )
}

export default MainRoutes