// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Export from '../../../../../core/global/Export';

// Layouts
import Header from './Header';
import Body from './Body';

// Request
import { reports } from '../../../../../core/request/Request';

const Index = () => {
    const [ report, setReport ] = useState();

    useEffect(() => {
        reports(setReport, 'category');
    }, []);

    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" marginTop= "40px">
            <Box marginBottom= "40px">
                <Export element= {
                        <button 
                            style= {{ backgroundColor: '#00b894', border: 'none', padding: '9px 15px', color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light', borderRadius: '5px' }}>Export to Excel</button>
                    } 
                    filename= "Category"
                    data= { report }
                    column= { report !== undefined ? Object.keys(report[0]) : [] } />
            </Box>
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
                <Grid item><Header /></Grid>
                <Grid item><Body data= { report } /></Grid>
            </Grid>
        </Box>
    );
}

export default Index;