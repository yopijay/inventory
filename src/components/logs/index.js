// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layout
import List from './layouts/list';

const Index = () => {
    return (
        <Box padding= "10px 30px">
            <Ctrl.Typography color= "#2c3e50" text= "LOGS" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Box marginTop= "20px">
                <Routes>
                    <Route exact path= "/" element= { <List /> } />
                </Routes>
            </Box>
        </Box>
    );
}

export default Index;