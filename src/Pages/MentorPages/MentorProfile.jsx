import React, { useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import CourseCard from './../../components//CourseCard'; // assuming CourseCard is a custom component
import Avatar from '@mui/material/Avatar';
import axios from "axios"
import { useUser } from '../../Context/UserContext';

function MentorProfile() {

    const {userId} = useUser();

    const fetchProfileData = async() => {
        const role = localStorage.getItem('role');
        console.log(role)
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/app/profile/${role}/${userId}`);
        // console.log(`${process.env.REACT_APP_API_URL}/app/profile/${role}/${userId}`)
    }

    useEffect(()=>{
        
        fetchProfileData();
    },[])

    return (
        <>

            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, marginTop: 10, marginBottom: 5 }}
            >
                My Profile
            </Typography>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "row",
                        height: 240,
                        alignItems: "center",
                        padding: 5
                    }}
                >
                    <Avatar sx={{ bgcolor: "white", marginRight: 2 , height: 130,width: 130,}}>
                        
                    </Avatar>

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 20
                    }}>

                      
              <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, marginTop: 5, marginBottom: 2 }}
            > Person 1 </Typography>

            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1,  marginBottom: 5 }}
            > Bio </Typography>
            
                      
                    </div>





                </Paper>


                
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
            <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "row",
                        height: 240,
                        alignItems: "center",
                        padding: 5
                    }}
                >
                  
                  
                </Paper>
            </Grid>

            <Grid container spacing={2}>

            </Grid>
        </>
    );
}

export default MentorProfile;
