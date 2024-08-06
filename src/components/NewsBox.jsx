import React from 'react';
import { Box, Typography, Card, CardContent, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsBox = () => {
    return (
        <Container sx={{ py: 4, maxWidth: '1000px', mt: 6 }}>
            <Box sx={{ borderBottom: '2px solid rgba(7, 0, 255, 0.3)', mb: 4, maxWidth: '900px', mx: 'auto' }} />
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ mt: 6 }}>
                <Typography variant="h5" color="white" sx={{ ml: 7, fontSize: '1.5rem', fontFamily: 'Sen, sans-serif', fontWeight: 100 }}>
                    News
                </Typography>
                <Button
                    component={Link}
                    to="/news"
                    sx={{
                        mr: 6,
                        color: 'white',
                        textTransform: 'none',
                        fontSize: '1.5rem',
                        fontFamily: 'Sen, sans-serif',
                        fontWeight: 100,
                    }}
                >
                    more &gt;
                </Button>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ flexWrap: 'wrap', gap: 5, maxWidth: '850px', mx: 'auto' }}>
                {['1', '2', '3'].map((id) => (
                    <Card
                        key={id}
                        sx={{
                            flex: '1 1 30%',
                            minWidth: 200,
                            minHeight: 325,
                            backgroundColor: '#0303FF05',
                            borderRadius: '15px',
                            border: '2px solid rgba(7, 0, 255, 0.5)',
                            boxShadow: '0px 0px 20px rgba(7, 0, 255, 0.5)',
                        }}
                    >
                        <CardContent
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#00A6FF',
                                    mb: 1,
                                    fontSize: '2rem',
                                    fontFamily: 'Sen, sans-serif',
                                    fontWeight: 100,
                                }}
                            >
                                Title of news
                            </Typography>
                            <Typography variant="body2" sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                mb: 2,
                                fontSize: '1rem',
                                fontFamily: 'Sen, sans-serif',
                            }}>
                                Short description
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    backgroundColor: '#2D62F6',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: '10px 65px',
                                    fontFamily: 'Sen, sans-serif',
                                    textTransform: 'none',
                                    fontSize: '1.25rem',
                                    '&:hover': {
                                        backgroundColor: '#2350C8',
                                    },
                                }}
                                component={Link}
                                to={`/news/${id}`}
                            >
                                more
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default NewsBox;
