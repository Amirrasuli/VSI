import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import logo from '/src/assets/logoHome.svg';

const ProductBox = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 12 }}
        >
            <Container maxWidth="md" sx={{ width: '70%', ml: 4 }}>
                <img src={logo} alt="Sample" style={{ width: '100%' }} />
            </Container>
            <Container maxWidth="lg" sx={{ mr: 20, mb: 5, width: '85%', padding: 2 }}>
                <Typography variant="h6" color="white" sx={{ mt: 2, fontSize: '1.75rem' }}>
                    Product name
                </Typography>
                <Typography variant="body1" color="white" sx={{ mt: 1, fontSize: '1.5rem', fontFamily: 'Sen, sans-serif' }}>
                    Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#2D62F6',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '10px 75px',
                            fontFamily: 'Sen, sans-serif',
                            textTransform: 'none',
                            fontSize: '1.25rem',
                            '&:hover': {
                                backgroundColor: '#2350C8',
                            },
                        }}
                    >
                        Buy
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            color: 'white',
                            borderColor: '#2D62F6',
                            borderRadius: '10px',
                            padding: '10px 70px',
                            fontFamily: 'Sen, sans-serif',
                            textTransform: 'none',
                            fontSize: '1.25rem',
                            '&:hover': {
                                borderColor: '#2D62F6',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default ProductBox;
