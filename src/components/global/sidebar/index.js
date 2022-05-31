// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Layouts
import Profile from './layouts/Profile';
import Nav from './layouts/Nav';

const Index = () => {
    return (
        <Box sx= {{ height: '100vh', width: { md: '240px' }, maxWidth: '240px' }} border= "solid 1px #ecf0f1">
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Grid item><Profile /></Grid>
                <Grid item style= {{ margin: '30px 0 0 0', borderTop: 'solid 1px #ecf0f1', padding: '20px 0' }}><Nav /></Grid>
            </Grid>
        </Box>
    );
}

export default Index;