// src/pages/About.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 14 }}>
            <Typography variant="h4" gutterBottom>
                WE Are The fUlL sTaCkErS
            </Typography>
            <Typography variant="body1" paragraph>
                Vitruvian Shield is dedicated to providing the best learning resources and products to enhance your knowledge and skills.
            </Typography>
            <Typography variant="body1" paragraph>
                Our mission is to empower individuals with the tools they need to succeed in their personal and professional lives.
            </Typography>
        </Container>
    );
}

export default About;
