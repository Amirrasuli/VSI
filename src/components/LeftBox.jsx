import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Vname from '/src/assets/metallogo.svg';

const LeftBox = () => {
    return (
        <Box
            sx={{
                width: 800,
                height: 850,
                position: 'absolute',
                left: -80,
                top: -20,
                backgroundColor: '#000', // Ensure there's a background to contrast the text and button
                padding: 4, // Add some padding to avoid content touching the edges
            }}
        >
            <Container maxWidth="md" id="features" sx={{ py: { xs: 8, sm: 16 } }}>

                <Button
                    variant="outlined"
                    sx={{
                        mt: 2,
                        backgroundColor: '#2D62F6',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: '20px 40px',
                        boxShadow: '-4px 0px 8px rgba(0, 0, 0, 0.2)',
                        border: 'none',
                        fontFamily: 'Sen, sans-serif',
                        '&:hover': {
                            backgroundColor: '#2D62F6',
                            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                        },
                    }}
                    component={Link}
                    to="/products"
                >
                    See products
                </Button>
            </Container>
        </Box>
    );
};

export default LeftBox;
