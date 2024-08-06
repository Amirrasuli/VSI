import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import picture from '/src/assets/firstpic.svg';

const ProductBaox = () => {
    return (
        <Box sx={{ mt: 12, height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="xl" sx={{ ml: 10, mb: 20, width: '100%', padding: 0 }}>
                        <Typography variant="h6" color="white" sx={{ mt: 2, fontSize: '1.5rem', fontFamily: 'Lato' }}>
                            Vitruvian shield
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ mt: 1.5, width: '120%', fontSize: '1rem', fontFamily: 'Sen, sans-serif' }}>
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
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="xl" sx={{ width: '130%' }}>
                        <img src={picture} alt="Sample" style={{ width: '100%' }} />
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductBox;
