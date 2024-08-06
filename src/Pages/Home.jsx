import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductBox from '../components/ProductBox.jsx';
import NewsBox from '../components/NewsBox';
import SideBox from '../components/sideBox';
const Home = () => {
    return (
        <Box sx={{ minheight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <SideBox/>

            <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flex: 1 }}
            >
                <ProductBox />

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
