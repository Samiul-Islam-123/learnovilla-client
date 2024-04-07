import React, { useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import CourseCard from "./../../components//CourseCard"; // assuming CourseCard is a custom component
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useUser } from "../../Context/UserContext";
import Stack from "@mui/material/Stack";

function MentorProfile() {
    const { userId } = useUser();

    const fetchProfileData = async () => {
        const role = localStorage.getItem("role");
        console.log(role);
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/app/profile/${role}/${userId}`);
        // console.log(`${process.env.REACT_APP_API_URL}/app/profile/${role}/${userId}`)
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

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
                        padding: 5,
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: "white",
                            marginRight: 2,
                            height: 130,
                            width: 130,
                        }}
                    ></Avatar>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: 20,
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h4"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, marginTop: 5, marginBottom: 2 }}
                        >
                            {" "}
                            Person 1{" "}
                        </Typography>

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, marginBottom: 5 }}
                        >
                            {" "}
                            Bio{" "}
                        </Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "row",
                        height: 280,
                        alignItems: "center",
                        padding: 5,
                        marginTop: 5,
                    }}
                >
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={20}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Name :
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Person 1
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={20}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Age :
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                20
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={12}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Contact No. :
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                9874223556
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={17}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Gender :
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Male
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={20}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Address :
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, marginBottom: 5 }}
                            >
                                Barackpore Road, Barasat
                            </Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            <Grid container spacing={2}></Grid>
        </>
    );
}

export default MentorProfile;
