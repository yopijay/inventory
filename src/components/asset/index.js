// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import Assets from './layouts/Assets';
import AssignAssets from './layouts/AssignAssets';

const Index = () => {
    return (
        <Box padding= "10px 30px">
            <Ctrl.Typography color= "#2c3e50" text= "ASSETS" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Box marginTop= "20px">
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Grid item>
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                            <Grid item md= { 2 }>
                                <Link to= "/assets" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#2980b9" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">ASSETS</Box>
                                </Link>
                            </Grid>
                            <Grid item md= { 2 }>
                                <Link to= "/assets/assign" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">ASSIGN ASSETS</Box>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Routes>
                            <Route exact path= "*" element= { <Assets /> } />
                            <Route exact path= "/assign/*" element= { <AssignAssets /> } />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Index;