// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import Category from './layouts/Category';

const Index = () => {
    return (
        <Box padding= "10px 30px">
            <Ctrl.Typography color= "#2c3e50" text= "Reports" style= {{ fontSize: '200%', fontWeight: 'bold' }} />
            <Box marginTop= "20px">
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Grid item>
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                            <Grid item md= { 2 }>
                                <Link to= "/reports/category" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">CATEGORY</Box>
                                </Link>
                            </Grid>
                            <Grid item md= { 2 }>
                                <Link to= "/reports/brand" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">BRAND</Box>
                                </Link>
                            </Grid>
                            <Grid item md= { 2 }>
                                <Link to= "/reports/users" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">USERS</Box>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Routes>
                            <Route exact path= "/category" element= { <Category /> } />
                            <Route exact path= "/brand" element= "BRAND" />
                            <Route exact path= "/users" element= "USERS" />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Index;