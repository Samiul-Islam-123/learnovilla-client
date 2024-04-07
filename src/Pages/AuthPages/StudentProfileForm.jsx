import React, { useState } from 'react';
import { Container, TextField, Grid, Typography, MenuItem, InputLabel, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { AddCircle as AddCircleIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { useUser } from '../../Context/UserContext';

function StudentProfileForm() {

    const navigate = useNavigate();

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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        contactNumber: '',
        email: '',
        address: '',
        school: '',
        currentYear: '',
        description: '',
        socialMediaLinks: '',
        skills: [],
        language: '',
    });

    const [profilePicture, setProfilePicture] = useState(null);

    // Function to add a new skill
    const addSkill = () => {
        if (formData.skills.length < 5) {
            setFormData({
                ...formData,
                skills: [...formData.skills, formData.newSkill]
            });
        }
    };

    const {userId, setUser, username, email, updateUsername, updateEmail} = useUser();
    // Function to delete a skill
    const deleteSkill = (index) => {
        const updatedSkills = [...formData.skills];
        updatedSkills.splice(index, 1);
        setFormData({
            ...formData,
            skills: updatedSkills
        });
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async() => {
        console.log(formData);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/app/create-student`, 
            {
                username : formData.firstName + " "+ formData.lastName,
                gender : formData.gender,
                contactNumber : formData.contactNumber,
                address : formData.address,
                academicYear : formData.currentYear,
                description : formData.description,
                socialLinks : formData.socialMediaLinks,
                hobbies : formData.skills
            });

        if(response.data.success === true){

            
            navigate('/app');
        }

        else
        alert(response.data.message)
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
                        <TextField name="firstName" label="First Name" fullWidth onChange={handleChange} />
                    </Grid>
                    {/* Last Name */}
                    <Grid item md={6} xs={12}>
                        <TextField name="lastName" label="Last Name" fullWidth onChange={handleChange} />
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
                                value={formData.gender}
                                onChange={handleChange}
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
                        <TextField name="contactNumber" label="Contact No." fullWidth onChange={handleChange} />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField defaultValue={email} name="email" label="Email ID" fullWidth onChange={handleChange} />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField name="address" multiline rows={4} label="Address" fullWidth onChange={handleChange} />
                    </Grid>

                    {/* Academic Background Section */}
                    <Grid item md={12} xs={12}>
                        <Typography variant="h4" marginBottom={"10px"}>
                            Academic Background
                        </Typography>
                        {/* Current School/institutu */}
                        <TextField
                            name="school"
                            marginBottom={"10px"}
                            label="School/Institute"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                        {/* class/ Year */}
                        <TextField
                            name="currentYear"
                            style={{
                                marginTop: "10px"
                            }}
                            fullWidth
                            label="Current Year/class"
                            marginBottom={"10px"}
                            variant="outlined"
                            onChange={handleChange}
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
                        <TextField
                            name="description"
                            multiline
                            style={{
                                marginTop: "10px"
                            }}
                            rows={4}
                            label="Your Description (Bio)"
                            fullWidth
                            onChange={handleChange}
                        />

                        {/* Social Media Links */}
                        <TextField
                            name="socialMediaLinks"
                            style={{
                                marginTop: "10px"
                            }}
                            label="Social Media Links (e.g., LinkedIn, Instagram)"
                            fullWidth
                            variant="outlined"
                            marginBottom={"10px"}
                            onChange={handleChange}
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
                                value={formData.newSkill}
                                onChange={(e) => setFormData({ ...formData, newSkill: e.target.value })}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') addSkill();
                                }}
                            />
                            {/* List of Hobbies */}
                            <List>
                                {formData.skills.map((skill, index) => (
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
                                name="language"
                                marginBottom={"10px"}
                                select
                                label="Language spoken"
                                fullWidth
                                variant="outlined"
                                defaultValue=""
                                onChange={handleChange}
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
                }} variant="contained" onClick={handleSubmit}>Next</Button>   
            </Container>
        </>
    )
}

export default StudentProfileForm;
