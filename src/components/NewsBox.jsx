import React from 'react';
import { Box, Typography, Card, CardContent, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const newsItems = [
    {
        id: '1',
        title: 'Title of news 1',
        description: 'Short description 1',
    },
    {
        id: '2',
        title: 'Title of news 2',
        description: 'Short description 2',
    },
    {
        id: '3',
        title: 'Title of news 3',
        description: 'Short description 3',
    },
];

const NewsBox = () => {
    return (
        <Container sx={{ py: 4, mt: 0 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h5" color="white" sx={{ fontFamily: 'Sen, sans-serif' }}>
                    News
                </Typography>
                <Button
                    component={Link}
                    to="/news"
                    sx={{
                        color: 'white',
                        textTransform: 'none',
                        fontFamily: 'Sen, sans-serif',
                    }}
                >
                    more &gt;
                </Button>
            </Box>
            <Grid container spacing={25}>
                {newsItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card
                            sx={{
                                minWidth: 400,
                                minHeight: 600,
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(14, 120, 191, 0.5) 100%)',
                                borderRadius: '20px',
                                border: '3px solid rgba(7, 0, 255, 0.6)',
                                boxShadow: '0px 2px 20px 5px rgba(7, 0, 255, 0.3)',
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: '#00A6FF', mb: 1, fontFamily: 'Sen, sans-serif' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2, fontFamily: 'Sen, sans-serif' }}
                                >
                                    {item.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 'auto',
                                        backgroundColor: '#2D62F6',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        padding: '10px 65px',
                                        fontFamily: 'Sen, sans-serif',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#2350C8',
                                        },
                                    }}
                                    component={Link}
                                    to={`/news/${item.id}`}
                                >
                                    more
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default NewsBox;
