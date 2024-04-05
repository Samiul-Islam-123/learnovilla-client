import React, { useEffect, useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {useNavigate} from "react-router-dom"

function ChooseRole() {
    const [mentorHovered, setMentorHovered] = useState(false);
    const [studentHovered, setStudentHovered] = useState(false);
    const [studentClicked, setStudentClicked] = useState(false);
    const [mentorClicked, setMentorClicked] = useState(false);

    const navigate = useNavigate();


    const handleMentorMouseEnter = () => {
        setMentorHovered(true);
    };

    const handleMentorMouseLeave = () => {
        setMentorHovered(false);
    };

    const handleStudentMouseEnter = () => {
        setStudentHovered(true);
    };

    const handleStudentMouseLeave = () => {
        setStudentHovered(false);
    };

    const handleMentorMouseClick = () => {
        setMentorClicked(true);
    }

    const handleStudentMouseClick = () => {
        setStudentClicked(true)
    }

    useEffect(()=>{
        console.log(mentorClicked)
    },[mentorClicked])


    return (
        <>
            <div style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 140,
                flexDirection: 'column',
            }}>
                <h1 style={{ fontSize: 30 }}>Choose Your Role:</h1><br />


                <div style={{
                    height: '50%',
                    width: '50%',
                    borderRadius: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>

                    <div style={{
                        height: '70%',
                        width: '300px',
                        backgroundColor: '#037ffc',
                        borderRadius: 15,
                        margin: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: "pointer",
                        flexDirection: 'column',
                        boxShadow: mentorHovered ? '0 0 10px 5px #fff, 0 0 20px 10px #037ffc, 0 0 30px 15px #fff' : 'none',
                        scale: mentorClicked ? '1.1' : '1',
                        transition: 'all 0.3s', 
                    }}
                        onMouseEnter={handleMentorMouseEnter}
                        onMouseLeave={handleMentorMouseLeave}
                        onClick={()=>{
                            navigate('/mentor-profile-input')
                        }}
                        >
                        
                        <SchoolIcon />
                        <h2>Mentor</h2>
                    </div>

                    <div style={{
                        height: '70%',
                        width: '300px',
                        backgroundColor: '#037ffc',
                        borderRadius: 15,
                        margin: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        cursor: "pointer",
                        boxShadow: studentHovered ? '0 0 10px 5px #fff, 0 0 20px 10px #037ffc, 0 0 30px 15px #fff' : 'none',
                        scale: studentClicked ? '1.1' : '1',
                        transition: 'all 0.3s',
                    }}
                        onMouseEnter={handleStudentMouseEnter}
                        onMouseLeave={handleStudentMouseLeave}
                        onClick={()=>{
                            navigate('/student-profile-input')

                        }}
                        >
                        <PeopleAltIcon />
                        <h2>Student</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseRole;
