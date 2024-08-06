import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './Pages/Footer';
import Background from './assets/background.svg'

const App = () => {
    return (
        <Router>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200vh',
                backgroundColor: '#f0f0f0',
                padding: 0,
            }}>

                <Container
                    maxWidth={"xl"}
                    sx={{
                        position: 'relative',
                        backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', // Ensure the image is centered
                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)', // Heavy shadow effect
                        borderRadius: 0,
                        padding: 2,
                        minHeight: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden', // Ensure content doesn't overflow
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.8) 100%)', // Black starts at top, fades from middle to bottom
                            zIndex: 1, // Position overlay above background image
                        },
                        '& > *': {
                            position: 'relative',
                            zIndex: 2, // Ensure content is above the overlay
                        },
                    }}
                >
                    <Navbar />
                    <Box sx={{ flex: 1,mb:10}}>
                        <AppRoutes />

                    </Box>
                    <Footer />
                </Container>
            </Box>
        </Router>
    );
}

export default App;
