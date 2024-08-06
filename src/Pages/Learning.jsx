// src/pages/Learning.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const Learning = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Learning Resources
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Resource 1</Typography>
                            <Typography variant="body2">
                                Description of learning resource 1. This resource covers the basics of our platform.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Resource 2</Typography>
                            <Typography variant="body2">
                                Description of learning resource 2. This resource covers advanced topics.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Resource 3</Typography>
                            <Typography variant="body2">
                                Description of learning resource 3. This resource is for expert users.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Learning;
