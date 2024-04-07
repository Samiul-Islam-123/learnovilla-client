import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import CourseCard from './../../components//CourseCard'; // assuming CourseCard is a custom component

function MentorProfile() {
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
            flexDirection: "column",
            height: 240,
          }}
        ></Paper>
      </Grid>
      <Grid container spacing={2}>

      </Grid>
    </>
  );
}

export default MentorProfile;
