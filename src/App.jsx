import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './Pages/Footer';
import Background from './assets/background.svg';

const App = () => {
    return (
        <Router>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200vh',
                padding: 0,
                bgcolor: 'black',
            }}>
                <Container
                    disableGutters
                    maxWidth={"xl"}
                    sx={{
                        width: '110%',
                        position: 'relative',
                        backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
                        borderRadius: 0,
                        padding: 0,
                        minHeight: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 1,
                        },
                        '& > *': {
                            position: 'relative',
                            zIndex: 2,
                        },
                    }}
                >
                    <Navbar />
                    <Box sx={{
                        flex: 2,
                        mb: 10,
                        width: '100%',
                        maxWidth: '100%',
                        padding: 0,
                        margin: 0,
                        boxSizing: 'border-box',
                    }}>
                        <AppRoutes />
                    </Box>
                </Container>
            </Box>
        </Router>
    );
}

export default App;
