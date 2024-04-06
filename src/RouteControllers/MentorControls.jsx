import React from 'react'
import Dashboard from '../Pages/ControlPanel'
import MentorDashboard from '../Pages/MentorPages/MentorDashboard'
import {Routes, Route} from "react-router-dom"

function MentorControls() {
  return (
    <>
        <Routes>
            <Route exact path='/mentor' element = {<MentorDashboard />} />
        </Routes>
    </>
  )
}

export default MentorControls