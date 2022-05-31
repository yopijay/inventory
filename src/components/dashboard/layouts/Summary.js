// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Request
import { count, sum } from '../../../core/request/Request';

const Summary = () => {
    let [ category, setCountCategory ] = useState();
    let [ brand, setCountBrand ] = useState();
    let [ user, setCountUser ] = useState();
    let [ asset, setCountAsset ] = useState();

    useEffect(() => {
        count(setCountCategory, 'category');
        count(setCountBrand, 'brand');
        count(setCountUser, 'users');
        sum(setCountAsset, 'assets', 'quantity');
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <Grid item md= { 3 }>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#3498db" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL USERS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { user !== undefined ? user : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item md= { 3 }>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#e67e22" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL BRANDS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { brand !== undefined ? brand : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item md= { 3 }>
                <Box width= "100%" height= "170px" 
                bgcolor= "#27ae60" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "CATEGORIES" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { category !== undefined ? category : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item md= { 3 }>
                <Box width= "100%" height= "170px" 
                bgcolor= "#1abc9c" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL ASSETS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { asset !== undefined ? asset[0].total : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Summary;