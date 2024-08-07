import React from 'react';
import { Box, Typography, Card, CardContent, Container, Grid, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '26.47px',
            color: "#F1F1F1",
        },
        h3: {
            fontWeight: 600,
            fontSize: '23px',
            lineHeight: '23px',
            color: "#FFFFFF",
        },
    },
});

const newsItems = [
    { id: '1', title: 'Title of news 1', description: 'Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur.' },
    { id: '2', title: 'Title of news 2', description: 'Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur.' },
    { id: '3', title: 'Title of news 3', description: 'Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur.' },
];

const NewsBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ py: 4, mt: 0 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h3">News</Typography>
                    <Typography variant="h3"
                        component={Link}
                        to="/news"
                    >
                        more &gt;
                    </Typography>
                </Box>
                <Container maxWidth="xl" sx={{ mt: 6}}>
                    <Grid container spacing={5}>
                        {newsItems.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card
                                    sx={{
                                        minWidth: 320,
                                        minHeight: 400,
                                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(14, 120, 191, 0.5) 100%)',
                                        borderRadius: '20px',
                                        border: '3px solid rgba(7, 0, 255, 0.6)',
                                        boxShadow: '0px 2px 20px 5px rgba(7, 0, 255, 0.3)',
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            flexDirection: 'column',
                                            height: '100%',
                                            color: 'white',
                                            mt:50,
                                            mx:3,
                                        }}
                                    >
                                        <Typography variant="h6">{item.title}</Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1,mt:1 }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </ThemeProvider>
    );
};

export default NewsBox;
