import React from 'react';
import { Container } from '@mui/material';
import logo from '/src/assets/bluevslogo.svg';
import Box from "@mui/material/Box";

const RightBox = () => {
    return (
        <Box
            sx={{
                width: 900,
                height: 900,
                position: 'absolute', // استفاده از absolute برای تنظیم مختصات داخلی
                left: 320, // یا هر مقداری که می‌خواهید
                top: 0, // یا هر مقداری که می‌خواهید
            }}
            >
        <Container
            maxWidth="md"
            sx={{ mt: 14, width: '48%'}}
        >
            <img src={logo} alt="Sample" style={{ width: '85%' }} />
        </Container>
        </Box>
    );
}

export default RightBox;
