// src/pages/Signup.jsx
import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const Signup = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <TextField label="Full Name" variant="outlined" fullWidth required />
                <TextField label="Email" variant="outlined" fullWidth required />
                <TextField label="Password" variant="outlined" type="password" fullWidth required />
                <TextField label="Confirm Password" variant="outlined" type="password" fullWidth required />
                <Button variant="contained" color="primary" type="submit">
                    Sign Up
                </Button>
            </Box>
        </Container>
    );
}

export default Signup;
