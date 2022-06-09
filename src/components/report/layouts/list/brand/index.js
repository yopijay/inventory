// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Layouts
import Header from './Header';
import Body from './Body';

// Request
import { reports } from '../../../../../core/request/Request';

const Index = () => {
    const [ report, setReport ] = useState();

    useEffect(() => {
        reports(setReport, 'brand');
    }, []);
    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" marginTop= "40px">
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
                <Grid item><Header /></Grid>
                <Grid item><Body data= { report } /></Grid>
            </Grid>
        </Box>
    );
}

export default Index;