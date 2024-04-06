import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CourseCard from "../components/CourseCard";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';

import ExploreIcon from '@mui/icons-material/Explore';
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { useNavigate } from "react-router-dom"
import MentorControls from "../RouteControllers/MentorControls";

import { Routes, Route } from "react-router-dom"
import MentorDashboard from "./MentorPages/MentorDashboard";
import Mentors from "./Mentors";
import MentorExplore from "./MentorPages/MentorExplore";
import MentorCourse from "./MentorPages/MentorCourse";
import MentorCommunication from "./MentorPages/MentorCommunication";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));


const CheckRole = () => {
    const role = (localStorage.getItem('role'));

    return role;
}

console.log(CheckRole());

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ControlPanel() {

    const navigate = useNavigate()

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: "24px", // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: "36px",
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <ListItemButton onClick={() => navigate('/app')}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    
                    <ListItemButton onClick={() => navigate('explore')}>
                        <ListItemIcon>
                            <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Explore" />
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate('courses')}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Courses" />
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate('communication')}>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Communication" />
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate('feedback')}>
                        <ListItemIcon>
                            <ThumbUpOffAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Feedback" />
                    </ListItemButton>
                    <Divider sx={{ my: 1 }} />
                    <ListSubheader component="div" inset>
                        Saved reports
                    </ListSubheader>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >

                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Routes>

                        <Route exact path="/" element=

                            {<>
                                {
                                    
                                        <MentorDashboard />
                                    



                                }
                            </>
                            } />

                        <Route exact path="/explore" element=

                            {<>
                                {
                                    
                                        <MentorExplore />
                                    
                                }
                            </>
                            } />

                        <Route exact path="/courses" element=

                            {<>
                                {
                                    <MentorCourse />
                                }
                            </>
                            } />

                        <Route exact path="/communication" element=

                            {<>
                                {
                                    <MentorCommunication />
                                }
                            </>
                            } />

                    </Routes>
                </Container>
            </Box>
        </Box>
    );
}
