// src/pages/Products.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Products = () => {
    const products = [
        { title: 'Product 1', description: 'Description of product 1.', image: 'product1.jpg' },
        { title: 'Product 2', description: 'Description of product 2.', image: 'product2.jpg' },
        { title: 'Product 3', description: 'Description of product 3.', image: 'product3.jpg' },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Our Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h5">{product.title}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Products;
