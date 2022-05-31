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
        <Box padding= "10px 30px">
            <Ctrl.Typography color= "#2c3e50" text= "USERS" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Box marginTop= "20px">
                <Routes>
                    <Route exact path= "/" element= { <List setType= { setType } setId = { setId } /> } />
                    <Route exact path= "/form" element = { <Box marginTop= "50px"><Form type= { type } id= { id } /></Box>} />
                </Routes>
            </Box>
        </Box>
    );
}

export default Index;