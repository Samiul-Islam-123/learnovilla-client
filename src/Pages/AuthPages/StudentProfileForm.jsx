import React, { useState } from 'react';
import { Container, TextField, Grid, Typography, MenuItem, InputLabel, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { AddCircle as AddCircleIcon, Delete as DeleteIcon } from '@mui/icons-material';

function StudentProfileForm() {
    // Define options for degrees and mentoring experience
    const degrees = [
        {
            value: 'bachelor',
            label: 'Bachelor\'s Degree',
        },
        {
            value: 'master',
            label: 'Master\'s Degree',
        },
        {
            value: 'phd',
            label: 'PhD',
        },
    ];

    const languages = [
        'English',
        'Bengali',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Japanese',
        'Arabic'
        
    ];

    // State variables for managing form data
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [gender, setGender] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);


    // Function to add a new skill
    const addSkill = () => {
        if (newSkill.trim() !== '' && skills.length < 5) {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    // Function to delete a skill
    const deleteSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Container>
                {/* Form Title */}
                <Typography variant='h3' style={{
                    marginTop: "20px",
                    marginBottom: "50px"
                }}>
                    Just few More informations about you
                </Typography>

                {/* Form Grid */}
                <Grid container spacing={2}>
                   
                   {/* Profile Picture Upload */}
                   <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="profile-picture">Profile Picture</InputLabel>
                        <input
                            accept="image/*"
                            id="profile-picture"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="profile-picture">
                            <IconButton component="span">
                                <AddCircleIcon />
                            </IconButton>
                        </label>
                        {profilePicture && (
                            <div style={{
                                overflow: 'hidden',
                                height: '10vw',
                                width: '10vw',

                                borderRadius: "50%"
                            }}>

                                <img src={profilePicture} alt="Profile" style={{ maxWidth: '200px' }} />
                            </div>
                        )}
                    </Grid>
                   
                    {/* First Name */}
                    <Grid item md={6} xs={12}>
                        <TextField label="First Name" fullWidth />
                    </Grid>
                    {/* Last Name */}
                    <Grid item md={6} xs={12}>
                        <TextField label="Last Name" fullWidth />
                    </Grid>
                    {/* Gender */}
                    <Grid item md={12} xs={12} >
                        <div>
                            <Typography variant='h5'>
                                Gender
                            </Typography>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </div>
                    </Grid>
                    {/* Contact Number */}
                    <Grid item md={12} xs={12}>
                        <TextField label="Contact No." fullWidth />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField label="Email ID" fullWidth />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField multiline rows={4} label="Address" fullWidth />
                    </Grid>

                    {/* Academic Background Section */}
                    <Grid item md={12} xs={12}>
                        <Typography variant="h4" marginBottom={"10px"}>
                            Academic Background
                        </Typography>
                        {/* Current School/institutu */}
                        <TextField
                            marginBottom={"10px"}

                            label="School/Institute"
                            fullWidth
                            variant="outlined"
                        />
                        {/* class/ Year */}
                        <TextField
                            style={{
                                marginTop: "10px"
                            }}
                            fullWidth
                            label="Current Year/class"
                            marginBottom={"10px"}
                            variant="outlined"

                        />

                        {/* Certificates */}
                        <Typography variant='h5' style={{
                            marginTop: "10px",
                            marginBottom: "10px"
                        }}>
                            Certificates/Honors
                        </Typography>
                        <TextField
                            style={{
                                marginTop: "10px"
                            }}
                            type="file"
                            
                            label="Certificates/Honors"
                            marginBottom={"10px"}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        {/* Description */}
                        <TextField multiline style={{
                            marginTop: "10px"
                        }} rows={4} label="Your Description (Bio)" fullWidth />

                        {/* Social Media Links */}
                        <TextField
                            style={{
                                marginTop: "10px"
                            }}
                            label="Social Media Links (e.g., LinkedIn, Instagram)"
                            fullWidth
                            variant="outlined"
                            marginBottom={"10px"}
                        />

                        {/* Hobbies and Interests Section */}
                        <Grid item md={12} xs={12}>
                            <Typography variant="h4" marginBottom={"10px"} marginTop={"10px"}>
                                Hobbies Or Interests
                            </Typography>
                            {/* Add Skill Input */}
                            <TextField
                                label="Add Hoobie/Interests ( Max 5 )"
                                fullWidth
                                variant="outlined"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') addSkill();
                                }}
                            />
                            {/* List of Hobbies */}
                            <List>
                                {skills.map((skill, index) => (
                                    <ListItem key={index} >
                                        <ListItemText primary={skill} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" onClick={() => deleteSkill(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        {/* Language spoken */}
                        <Grid item md={12} xs={12}>
                            <TextField
                                marginBottom={"10px"}
                                select
                                label="Language spoken"
                                fullWidth
                                variant="outlined"
                                defaultValue=""
                            >
                                {languages.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>
                </Grid>

                <Button style={{
                    
                    marginTop : "10px",
                    marginBottom : "150px"
                }} variant="contained">Next</Button>   
            </Container>
        </>
    )
}

export default StudentProfileForm;
