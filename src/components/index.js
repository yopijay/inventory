// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layouts
import Sidebar from './global/sidebar';

// Constants
import { Navs } from '../core/global/constants/Navs';

const Index = () => {

    return (
        <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "flex-start">
            <Sidebar />
            <Box padding= "20px 10px" flexGrow= "1" overflow= "hidden">
                <Routes>
                    {
                        Navs().map((component, index) => (
                            <Route exact path= { component.path + '/*' } key= { index } element= { component.component } />
                        ))
                    }
                </Routes>
            </Box>
        </Box>
    );
}

export default Index;