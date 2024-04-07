import React from "react";
import styles from "./style.module.css";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid, Paper, Typography, } from "@mui/material";

function MentorCommunication() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.chatPannel}>
                    <Stack direction="column" spacing={2}>
                        <div className={styles.chat}>
                            <Avatar sx={{ bgcolor: "orange", marginRight: 2 }}>
                                S
                            </Avatar>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{
                                    flexGrow: 1,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }}
                            >
                                Sentu
                            </Typography>
                        </div>
                        <div className={styles.chat}>
                            <Avatar sx={{ bgcolor: "blue", marginRight: 2 }}>
                                A
                            </Avatar>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{
                                    flexGrow: 1,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }}
                            >
                                Aentu
                            </Typography>
                        </div>
                        <div className={styles.chat}>
                            <Avatar sx={{ bgcolor: "green", marginRight: 2 }}>
                                M
                            </Avatar>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{
                                    flexGrow: 1,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }}
                            >
                                Mentu
                            </Typography>
                        </div>
                    </Stack>
                </div>
                <div className={styles.massages}>
                    <TextField fullWidth id="fullWidth" />
                </div>
            </div>
        </>
    );
}

export default MentorCommunication;
