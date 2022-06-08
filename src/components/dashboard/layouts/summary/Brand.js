// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Request
import { count } from '../../../../core/request/Request';

const Brand = () => {
    let [ brand, setCountBrand ] = useState();

    useEffect(() => {
        count(setCountBrand, 'brand');
    }, []);

    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Grid item>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#e67e22" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL BRANDS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { brand !== undefined ? brand : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Brand;