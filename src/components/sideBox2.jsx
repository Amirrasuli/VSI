import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import picture from '/src/assets/firstpic.svg';

const ProductBox = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 12 }}
        >
            <Container maxWidth="xl" sx={{ mr: 20, mb: 5, width: '100%', padding: 0}}>
                <Typography variant="h6" color="white" sx={{ mt: 2, fontSize: '1.75rem' }}>
                    Vitruvian shield
                </Typography>
                <Typography variant="body1" color="white" sx={{ mt: 1, fontSize: '1.5rem', fontFamily: 'Sen, sans-serif' }}>
                    Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.
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
                </Box>
            </Container>
            <Container maxWidth="md" sx={{ width: '100%', ml: 4 }}>
                <img src={picture} alt="Sample" style={{ width: '100%' }} />
            </Container>
        </Box>
    );
}

export default ProductBox;
