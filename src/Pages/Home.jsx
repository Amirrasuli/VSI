import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductBox from '../components/ProductBox';
import NewsBox from '../components/NewsBox';
import SideBox from '../components/sideBox';
import SideBox2 from '../components/sideBox2';
import LearningBox from "../components/LearningBox.jsx";

const Home = () => {
    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
            }}

        >
            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1,
                    background: 'rgba(0, 0, 0, 0.7)',
                    height: '700px',

                }}
            >
            <ProductBox />
            </Box>


            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1,
                    mt: 18,
                    background: 'rgba(0, 0, 0, 0.7)',
                }}
            >
                <SideBox />
            </Box>


            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 2,
                    mt: 20,
                    background: 'rgba(0, 0, 0, 0.7)',
                }}
            >
                <LearningBox />
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1, mt: 20 }}
            >
                <NewsBox />
            </Box>
        </Box>
    );
}

export default Home;
