import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/logo150px.png';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        button: {
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '24.06px',
            textTransform: 'none',
        },
    },
});

const getActiveStyle = (isActive) => isActive ? ({
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '5px',
        backgroundColor: 'white',
        bottom: '0px',
        left: '0',
        borderRadius: '10px',
        transform: 'scaleX(0.5)',
    },
    fontWeight: 700,
}) : {};

const commonButtonStyles = {
    textTransform: 'none',
    position: 'relative',
    transition: 'none',
    boxShadow: 'none',
    typography: 'button',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',  // عرض کامل در حالت عادی
        height: '5px',
        backgroundColor: 'gray',
        bottom: '0px',
        left: '0',
        borderRadius: '10px',
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.3s',
    },
    '&:hover::after': {
        transform: 'scaleX(0.5)',
    },
};

const Navbar = (props) => {
    const location = useLocation();

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Learning', path: '/learning' },
        { name: 'News', path: '/news' },
        { name: 'About us', path: '/about' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                sx={{
                    boxShadow: 0,
                    bgcolor: '#1D1D1D',
                    backgroundImage: 'none',
                    width: '100%',
                    ...props.sx,
                    px:0,
                }}
            >
                <Toolbar sx={{ width: '100%', margin: 0, px: 0 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{
                            ml: 0,
                            mr: 0,
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            position: 'relative',
                            transition: 'none',
                            boxShadow: 'none',
                        }}
                        disableRipple
                    >
                        <img src={logo} alt="logo" style={{ width: 65}} />
                    </Button>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                color="inherit"
                                component={Link}
                                to={page.path}
                                sx={{
                                    mx: 2,
                                    color: 'white',
                                    ...commonButtonStyles,
                                    ...getActiveStyle(location.pathname === page.path),
                                }}
                                disableRipple
                            >
                                {page.name}
                            </Button>
                        ))}
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            color="inherit"
                            component={Link}
                            to="/login"
                            sx={{
                                color: 'white',
                                ...commonButtonStyles,
                                ...getActiveStyle(location.pathname === '/login'),
                            }}
                            disableRipple
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"

                            size="large"
                            component={Link}
                            to="/signup"
                            sx={{
                                mx: 2,
                                borderRadius: '8px',
                                backgroundColor: '#2D62F6',
                            }}
                            disableRipple
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Navbar;
