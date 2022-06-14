// Libraries
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import Category from './layouts/Category';
import Brand from './layouts/Brand';
import Users from './layouts/Users';
import Assets from './layouts/Assets';
import AssignedAsset from './layouts/AssignedAssets';

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Reports');
    }, []);

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
                            <Grid item md= { 2 }>
                                <Link to= "/reports/assets" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">ASSETS</Box>
                                </Link>
                            </Grid>
                            <Grid item md= { 2 }>
                                <Link to= "/reports/assigned-asset" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "10px 0" color= "#ffffff" 
                                        bgcolor= "#3498db" borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">ASSIGNED ASSETS</Box>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Routes>
                            <Route exact path= "/category" element= { <Category /> } />
                            <Route exact path= "/brand" element= { <Brand /> } />
                            <Route exact path= "/users" element= { <Users /> } />
                            <Route exact path= "/assets" element= { <Assets /> } />
                            <Route exact path= "/assigned-asset" element= { <AssignedAsset /> } />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Index;