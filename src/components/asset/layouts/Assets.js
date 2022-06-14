// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layouts
import List from './list/assets';
import Form from './form/assets';

const Assets = () => {

    return (
        <Routes>
            <Route exact path= "/" element= { <List /> } />
            <Route exact path= "/form/:type" element= { <Box marginTop= "50px"><Form /></Box> } />
            <Route exact path= "/form/:type/:id" element= { <Box marginTop= "50px"><Form /></Box> } />
        </Routes>
    );
}

export default Assets;