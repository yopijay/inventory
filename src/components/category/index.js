// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import List from './layouts/list';
import Form from './layouts/form';

const Index = () => {
    let [ type, setType ] = useState();
    let [ id, setId ] = useState();

    return (
        <Box sx= {{ padding: '20px'}}>
            <Ctrl.Typography color= "#2c3e50" text= "CATEGORIES" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Routes>
                <Route exact path= "/" element= { <List setType= { setType } setId = { setId } /> } />
                <Route exact path= "/form" element= { <Box marginTop= "50px"><Form type= { type } id= { id } /></Box> } />
            </Routes>
        </Box>
    );
}

export default Index;