// Libraries
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Export from '../../../../../core/global/Export';
import Print from '../../../../../core/global/Print';
import PDF from '../../../../../core/global/PDF';

// Layouts
import Header from './Header';
import Body from './Body';

// Request
import { reports } from '../../../../../core/request/Request';

// Assets
import Logo from '../../../../../assets/images/profile.jpg';

const Index = () => {
    const [ report, setReport ] = useState();
    const _print = useRef();

    useEffect(() => {
        reports(setReport, 'category');
    }, []);

    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" marginTop= "40px">
            <Box marginBottom= "40px" display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Box>
                    <Export element= {
                        <button 
                            style= {{ backgroundColor: '#00b894', border: 'none', padding: '9px 15px', color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light', borderRadius: '5px' }}>Export to Excel</button>
                    } 
                    filename= "Category"
                    data= { report }
                    column= { report !== undefined ? Object.keys(report[0]) : [] } />
                </Box>
                <Box margin= "0 20px">
                    <Print
                        name= "Category"
                        element={<button style= {{ backgroundColor: '#00b894', 
                        border: 'none', padding: '9px 15px', color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light', borderRadius: '5px' }}>PRINT</button>}
                        content={ () => _print.current }
                    />
                </Box>
                <Box><PDF name= "Category" content= { report } logo= {{ img: Logo, w: 10, h: 10, type: 'JPEG' }} /></Box>
            </Box>
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } ref= { _print }>
                <Grid item><Header /></Grid>
                <Grid item><Body data= { report } /></Grid>
            </Grid>
        </Box>
    );
}

export default Index;