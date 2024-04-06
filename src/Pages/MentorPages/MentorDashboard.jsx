import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import CourseCard from './../../components//CourseCard'; // assuming CourseCard is a custom component

function MentorDashboard() {
  return (
    <>
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
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
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

export default MentorDashboard;
