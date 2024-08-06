import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '38.5px',
        },
        body2: {
            fontFamily: 'Inder, Arial, sans-serif',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '30px',
        },
    },
});

const links = {
    Shop: [
        { text: 'Product 1', path: '/products/product-1' },
        { text: 'Product 2', path: '/products/product-2' },
        { text: 'Product 3', path: '/products/product-3' },
        { text: 'Product 4', path: '/products/product-4' },
        { text: 'Product 5', path: '/products/product-5' },
    ],
    Learn: [
        { text: 'Guide 1', path: '/learning/guide-1' },
        { text: 'Guide 2', path: '/learning/guide-2' },
        { text: 'Guide 3', path: '/learning/guide-3' },
        { text: 'Guide 4', path: '/learning/guide-4' },
        { text: 'Guide 5', path: '/learning/guide-5' },
    ],
    News: [
        { text: 'News 1', path: '/news/news-1' },
        { text: 'News 2', path: '/news/news-2' },
        { text: 'News 3', path: '/news/news-3' },
        { text: 'News 4', path: '/news/news-4' },
        { text: 'News 5', path: '/news/news-5' },
    ],
    AboutUs: [
        { text: 'Our Story', path: '/about/our-story' },
        { text: 'Team', path: '/about/team' },
        { text: 'Careers', path: '/about/careers' },
        { text: 'Mission', path: '/about/mission' },
        { text: 'Vision', path: '/about/vision' },
    ],
};

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="footer"
                sx={{
                    bgcolor: 'transparent',
                    color: 'white',
                    position: 'relative',
                    bottom: 0,
                    top: 2,
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottom: '2px solid rgba(7, 0, 255, 0.3)',
                        width: '90%',

                    }}
                />

                <Container maxWidth="xl" sx={{mt:6}}>
                    <Grid container spacing={4}>
                        {Object.entries(links).map(([title, items]) => (
                            <Grid item xs={12} sm={6} md={3} key={title}>
                                <Typography variant="h6" sx={{ mb: 4 }}>
                                    {title}
                                </Typography>
                                <Box>
                                    {items.map(({ text, path }, index) => (
                                        <Typography
                                            key={index}
                                            variant="body2"
                                            sx={{ mb: 4 }}
                                        >
                                            <Link to={path} style={{ color: 'inherit', textDecoration: 'none', opacity: 0.75 }}>
                                                {text}
                                            </Link>
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ marginTop: 20 }}>
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()} Vitruvian Shield. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Footer;
