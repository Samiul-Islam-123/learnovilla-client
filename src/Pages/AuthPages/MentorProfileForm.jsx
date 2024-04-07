import React, { useState } from 'react';
import { Container, TextField, Grid, Typography, MenuItem, InputLabel, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { AddCircle as AddCircleIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Button from '@mui/material/Button';

function MentorProfileForm() {
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

    const mentoringExperience = [
        {
            value: 5,
            label: '5 years'
        },
        {
            value: 4,
            label: '4 years'
        },
        {
            value: 3,
            label: '3 years'
        },
        {
            value: 2,
            label: '2 years'
        },
        {
            value: 1,
            label: '1 years'
        }
    ]

    const languages = [
        'English',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Japanese',
        'Arabic',
        'Bengali'
    ];

    // State variables for managing form data
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [gender, setGender] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    // Function to add a new skill
    const addSkill = () => {
        if (newSkill.trim() !== '' && skills.length < 5) {
            setFormData({
                ...formData,
                skills: [...formData.skills, formData.newSkill]
            });
        }
    };

    // Function to delete a skill
    const deleteSkill = (index) => {
        const updatedSkills = [...skills];
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

    const handleSubmit = () =>{
        console.log(formData)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                <Grid container spacing={2} style={{ position: "relative" }}>

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
                        <TextField label="First Name" fullWidth  onChange={handleChange}/>
                    </Grid>
                    {/* Last Name */}
                    <Grid item md={6} xs={12}>
                        <TextField label="Last Name" fullWidth onChange={handleChange} />
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
                        <TextField label="Contact No." fullWidth  onChange={handleChange}/>
                    </Grid>

                    {/* Description */}
                    <Grid item md={12} xs={12}>

                        <TextField multiline onChange={handleChange} style={{
                            marginTop: "10px"
                        }} rows={4} label="Your Description (Bio)" fullWidth />
                    </Grid>

                    {/* Language spoken */}
                    <Grid item md={12} xs={12} style={{
                        marginTop: "10px"
                    }}>
                        <TextField
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

                    {/* Professional Background Section */}
                    <Grid item md={12} xs={12}>
                        <Typography variant="h4" marginBottom={"10px"}>
                            Professional Background
                        </Typography>
                        {/* Degree */}
                        <TextField
                            marginBottom={"10px"}
                            select
                            label="Degree"
                            fullWidth
                            variant="outlined"
                            defaultValue=""
                            onChange={handleChange}
                        >
                            {degrees.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/* Certificates */}
                        <TextField
                            style={{
                                marginTop: "22px"
                            }}
                            type="file"
                            label="Certificates"
                            marginBottom={"10px"}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                        />


                        {/* Social Media Links */}
                        <TextField
                            style={{
                                marginTop: "22px"
                            }}
                            label="Social Media Links (e.g., LinkedIn, Instagram)"
                            fullWidth
                            variant="outlined"
                            marginBottom={"10px"}
                            onChange={handleChange}
                        />

                        {/* Skills and Expertise Section */}
                        <Grid item md={12} xs={12}>
                            <Typography variant="h4" marginBottom={"10px"} marginTop={"10px"}>
                                Skills and Expertise
                            </Typography>
                            {/* Add Skill Input */}
                            <TextField
                                label="Add Skill ( Max 5 )"
                                fullWidth
                                variant="outlined"
                                value={formData.newSkill}
                                onChange={handleChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') addSkill();
                                }}
                            />
                            {/* List of Skills */}
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

                        {/* Mentoring Experience */}
                        <Grid item md={12} xs={12}>
                            <TextField
                                marginBottom={"10px"}
                                select
                                label="Mentoring Experience"
                                fullWidth
                                variant="outlined"
                                defaultValue=""
                                onChange={handleChange}
                            >
                                {mentoringExperience.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>


                </Grid>


                <Button style={{

                    marginTop: "10px",
                    marginBottom: "150px"
                }} variant="contained" onClick={handleSubmit}>Next</Button>



            </Container>
        </>
    )
}

export default MentorProfileForm;
