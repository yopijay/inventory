// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Request
import { getall } from '../../../../core/request/Request';

// Layouts
import Body from './Body';
import Header from './Header';

const Index = () => {
    const [ logs, setLogs ] = useState();

    useEffect(() => {
        getall(setLogs, 'logs');
    }, []);

    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" marginTop= "40px">
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
                <Grid item><Header /></Grid>
                <Grid item><Body data= { logs } /></Grid>
            </Grid>
        </Box>
    );
}

export default Index;