// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Layouts
import Assets from './layouts/Assets';
import AssignAssets from './layouts/AssignAssets';

const Index = () => {
    return (
        <Box sx= {{ padding: { xs: 0, md: '20px' } }}>
            <Ctrl.Typography color= "#2c3e50" text= "ASSETS" sx= {{ fontSize: { xs: '150%', sm: '180%', md: '200%' }, fontWeight: 'bold', 
                                                                                                                marginTop: { xs: '20px', md: 0} }} />
            
            <Routes>
                <Route exact path= "/*" element= { <Assets /> } />
                <Route exact path= "/issuance/*" element= { <AssignAssets /> } />
            </Routes>
        </Box>
    );
}

export default Index;