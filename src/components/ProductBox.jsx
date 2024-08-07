import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import picture from '/src/assets/firstpic.svg';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '26.47px',
            color:"#F1F1F1"
        },
        h3: {
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '32px',
            color:"#FFFFFF"
        },
    },
});

const ProductBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{m:0,p:0,}}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} md={6} sx={{ flexDirection: 'column',m:0,p:0}}>
                        <Typography sx={{ ml:14,mt:30 }}
                            variant="h3"
                        >
                            Vitruvian shield
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ml: 13,mt: 1.5, mb: 1.5,mr:28}}
                        >
                            Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.                        </Typography>
                        <Button
                            variant="contained"

                            size="large"
                            component={Link}
                            to="/signup"
                            sx={{
                                px:4,
                                py:1,
                                ml:13,
                                mb:30,
                                borderRadius: '4px',
                                backgroundColor: '#0E78BF',
                                textTransform: 'none',
                            }}
                            disableRipple
                        >
                            see product
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={7} md={6}>
                        <img src={picture} alt="Sample"
                             style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default ProductBox;
