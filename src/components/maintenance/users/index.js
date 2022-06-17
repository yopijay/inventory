// Libraries
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layouts
import List from './layouts/list';
import Form from './layouts/form';

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Users');
    }, []);

    return (
        <Box sx= {{ marginTop: { xs: '10px', sm: '15px', md: '20px' }, transition: 'all 0.2s ease-in-out' }}>
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <Form /> } />
                <Route exact path= "/form/:type/:id" element= { <Form /> } />
            </Routes>
        </Box>
    );
}

export default Index;