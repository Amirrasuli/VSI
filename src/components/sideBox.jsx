import React from 'react';
import {Typography, Container, Grid, Card, Button} from '@mui/material';
import Vname from '../assets/Vs-TLogo.png';
import Vlogo from '../assets/bluevslogo.svg';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

const SideBox = () => {
    return (
        <Container id="features" sx={{
            py: {xs: 2, sm: 2},
            px: {xs: 2, sm: 8},
            height: { xs: 'auto', sm: '66.66vh' }
        }}>
            <Grid container spacing={14}>
                <Grid item md={5} sx={{mt: 10, ml:7 }}>

                    <img src={Vname} alt="Sample" style={{width: '100%', display: 'flex'}}/>
                    <Typography
                        component="h2"
                        variant="h4"
                        color="white"
                        display={"flex"}
                        sx={{mb: {xs: 2,
                                sm: 5,
                                fontFamily: 'Sen, sans-serif'},
                            ml: 1,
                            fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }
                    }}
                    >
                        Lorem ipsum dolor sit Mauris tincidunt
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{
                            ml: 1,
                            backgroundColor: '#2D62F6',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '15px 30px',
                            boxShadow: '-4px 0px 8px rgba(0, 0, 0, 0.2)',
                            border: 'none',
                            fontFamily: 'Sen, sans-serif',
                            textTransform: 'none',
                            fontSize: '1rem',
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

                </Grid>
                <Grid
                    item
                    xs={11}
                    md={5.5}
                    sx={{mt: 1,ml: 6}}>

                    <img src={Vlogo} alt="Sample" style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SideBox;
