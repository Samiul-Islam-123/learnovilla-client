import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/AuthPages/Login'
import SignUp from '../Pages/AuthPages/Signup'
import Dashboard from '../Pages/ControlPanel'
import ChooseRole from '../Pages/AuthPages/ChooseRole'
import MentorProfileForm from '../Pages/AuthPages/MentorProfileForm'
import StudentProfileForm from '../Pages/AuthPages/StudentProfileForm'
import Mentors from '../Pages/Mentors'
import ControlPanel from '../Pages/ControlPanel'
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"

function MainRoutes() {

  const navigate = useNavigate();

  const checkAuth = () => {
    const token = Cookies.get('access_token');
    if(token)
    return true;

    else
    return false;
  }

  return (
    <>
        <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/choose-role' element={<ChooseRole />}></Route>
            <Route exact path='/mentor-profile-input' element={<MentorProfileForm />}></Route>
            <Route exact path='/student-profile-input' element={<StudentProfileForm />}></Route>


            
            <Route exact path='/signup' element={<SignUp />}></Route>
            <Route exact path='/app/*' element={
              checkAuth() === true ? (<>
              <ControlPanel />
              </>) : (<>
                <Navigate to="/" replace />
              </>)
            }></Route>
            <Route exact path='/mentors' element={<Mentors />}></Route>

        </Routes>
    </>
  )
}

export default MainRoutes