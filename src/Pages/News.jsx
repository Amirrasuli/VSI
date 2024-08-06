// src/pages/News.jsx
import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const News = () => {
    const newsItems = [
        { title: 'News 1', date: '2023-07-20', description: 'Description of news item 1.' },
        { title: 'News 2', date: '2023-07-18', description: 'Description of news item 2.' },
        { title: 'News 3', date: '2023-07-15', description: 'Description of news item 3.' },
    ];

    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Latest News
            </Typography>
            <List>
                {newsItems.map((news, index) => (
                    <ListItem key={index} divider>
                        <ListItemText
                            primary={news.title}
                            secondary={`${news.date} - ${news.description}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default News;
