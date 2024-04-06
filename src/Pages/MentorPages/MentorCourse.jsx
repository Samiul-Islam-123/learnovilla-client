
import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import CourseCard from './../../components/CourseCard'; 

function MentorCourses() {
  return (
    <>

      
        
      
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, marginTop: 10, marginBottom: 5 }}
      >
        My Courses
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
      </Grid>
      
    </>
  );

}

export default MentorCourses;
