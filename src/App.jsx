import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './Pages/Footer';

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
                        background: 'linear-gradient(135deg, #14517B 0%, #0F3E64 5%, #0A2647 20%, #040E2B 30%, #01011B 40%, #01011B 100%)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: 0,
                        padding: 2,
                        minHeight: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
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
