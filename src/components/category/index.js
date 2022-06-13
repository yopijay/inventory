// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import List from './layouts/list';
import Form from './layouts/form';

const Index = () => {

    return (
        <Box sx= {{ padding: '20px'}}>
            <Ctrl.Typography color= "#2c3e50" text= "CATEGORIES" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <Box marginTop= "50px"><Form /></Box> } />
                <Route exact path= "/form/:type/:id" element= { <Box marginTop= "50px"><Form /></Box> } />
            </Routes>
        </Box>
    );
}

export default Index;