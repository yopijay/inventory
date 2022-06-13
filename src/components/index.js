// Libraries
import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layouts
import Navbar from './global/navbar';
import Sidebar from './global/sidebar';

// Constants
import { Layouts } from '../core/global/constants/Navs';

const Index = () => {

    return (
        <Box sx= {{ backgroundColor: '#f5f6fa', display: 'flex', width: '100%', height: '100vh', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Navbar />
            <Box sx= {{ display: 'flex', width: '100%' }}>
                <Container>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Sidebar />
                        <Box sx= {{ flexGrow: '1', overflow: 'hidden'  }}>
                            <Toolbar />
                            <Routes>
                                {
                                    Layouts().map((component, index) => (
                                        <Route exact path= { component.path + '/*' } key= { index } element= { component.component } />
                                    ))
                                }
                            </Routes>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Index;