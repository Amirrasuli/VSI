import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductBox from '../components/ProductBox.jsx';
import NewsBox from '../components/NewsBox';
import SideBox from '../components/sideBox';
import SideBox2 from '../components/sideBox2';

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
                    background: 'rgba(0, 0, 0, 1)',
                    height: '800px'
                }}
            >
            <ProductBox />
            </Box>


            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1,
                    mt: 10,
                    background: 'rgba(0, 0, 0, 1)',
                }}
            >
                <SideBox />
            </Box>


            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1,
                    mt: 10,
                    background: 'rgba(0, 0, 0, 1)',
                }}
            >
                <SideBox2 />
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1, mt: 2 }}
            >
                <NewsBox />
            </Box>
        </Box>
    );
}

export default Home;
