// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layout
import List from './layouts/list';
import Form from './layouts/form';

// Context
import { TestReportProvider } from '../../../core/context/TestReportContext';

const Index = () => {
    return (
        <Box sx= {{ marginTop: { xs: '10px', sm: '15px', md: '20px' }, transition: 'all 0.2s ease-in-out' }}>
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <TestReportProvider><Form /></TestReportProvider> } />
                <Route exact path= "/form/:type/:id" element= { <TestReportProvider><Form /></TestReportProvider> } />
            </Routes>
        </Box>
    );
}

export default Index;