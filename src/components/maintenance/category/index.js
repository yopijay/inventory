// Libraries
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Layouts
import List from './layouts/list';
import Form from './layouts/form';

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Categories');
    }, []);

    return (
        <Box sx= {{ padding: { xs: 0, md: '20px' } }}>
            <Ctrl.Text>CATEGORIES</Ctrl.Text>
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <Box marginTop= "50px"><Form /></Box> } />
                <Route exact path= "/form/:type/:id" element= { <Box marginTop= "50px"><Form /></Box> } />
            </Routes>
        </Box>
    );
}

export default Index;