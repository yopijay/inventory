// Libraries
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import List from './layouts/list';
import Form from './layouts/form';

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Brands');
    }, []);

    return (
        <Box sx= {{ padding: { xs: 0, md: '20px' } }}>
            <Ctrl.Typography color= "#2c3e50" text= "BRANDS" sx= {{ fontSize: { xs: '150%', sm: '180%', md: '200%' }, fontWeight: 'bold', 
                                                                                                                marginTop: { xs: '20px', md: 0} }} />
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <Box marginTop= "50px"><Form /></Box> } />
                <Route exact path= "/form/:type/:id" element= { <Box marginTop= "50px"><Form /></Box> } />
            </Routes>
        </Box>
    );
}

export default Index;