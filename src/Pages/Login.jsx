// src/pages/Login.jsx
import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const Login = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField label="Email" variant="outlined" fullWidth required />
                <TextField label="Password" variant="outlined" type="password" fullWidth required />
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </Box>
        </Container>
    );
}

export default Login;
