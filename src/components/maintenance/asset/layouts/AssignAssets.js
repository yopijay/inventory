// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Layouts
import List from './list/assignedassets';
import Form from './form/assignedassets'

const AssignAssets = () => {
let [ type, setType ] = useState();
let [ id, setId ] = useState();

    return (
        <Box padding= "10px 30px">
            <Routes>
                <Route exact path= "/" element= { <List setType= { setType } setId= { setId } /> } />
                <Route exact path= "/form" element= { <Box marginTop= "50px"><Form type= { type } id= { id } /></Box> } />
            </Routes>
        </Box>
    );
}

export default AssignAssets;