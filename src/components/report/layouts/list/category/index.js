// Libraries
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
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
    const [ isLoad, setIsLoad ] = useState(true);
    const _print = useRef();

    useEffect(() => {
        reports(setReport, 'category', setIsLoad);
    }, []);

    return (
        <Box sx= {{ padding: { xs: 0, md: '20px' } }}>
            <Ctrl.Typography color= "#2c3e50" text= "REPORT - CATEGORIES" 
                sx= {{ fontSize: { xs: '150%', sm: '180%', md: '200%' }, fontWeight: 'bold', marginTop: { xs: '20px', md: 0}, marginBottom: { xs: '15px' } }} />
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item>
                    <Grid container direction= "row"  justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                        <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                            <Box sx= {{ backgroundColor: '#e17055', textAlign: 'center', padding: { xs: '10px 12px', sm: '7px 12px', md: '10px 15px' }, borderRadius: '5px' }}>
                                <PDF name= "Category Report" element= { <Ctrl.Typography color= "#ffffff" text= "PDF" sx= {{ fontSize: { xs: '120%', sm: '110%', md: '120%' } }} /> }
                                    content= { report } logo= {{ img: Logo, w: 10, h: 10, type: 'JPEG' }} />
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                            <Box sx= {{ backgroundColor: '#0984e3', textAlign: 'center', padding: { xs: '10px 12px', sm: '7px 12px', md: '10px 15px' }, borderRadius: '5px' }}>
                                <Print name= "Category Report" element= { () => <button style= {{ backgroundColor: 'transparent', border: 'none', fontFamily: 'Gilroy Light', margin: 0, padding: 0 }}>
                                        <Ctrl.Typography color= "#ffffff" text= "PRINT" sx= {{ fontSize: { xs: '120%', sm: '110%', md: '120%' } }} />
                                    </button> } content={ () => _print.current } />
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                            <Box sx= {{ backgroundColor: '#00b894', textAlign: 'center', padding: { xs: '10px 12px', sm: '7px 12px', md: '10px 15px' }, borderRadius: '5px' }}>
                                <Export element= { <button style= {{ backgroundColor: 'transparent', border: 'none', fontFamily: 'Gilroy Light', margin: 0, padding: 0 }}>
                                                                    <Ctrl.Typography color= "#ffffff" text= "EXPORT TO EXCEL" sx= {{ fontSize: { xs: '120%', sm: '110%', md: '120%' } }} />
                                                                </button> } filename= "Category Report" data= { report } column= { report !== undefined ? Object.keys(report[0]) : [] } />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } sx= {{ marginTop: { xs: 0, sm: '-25px', md: '-30px' } }} ref= { _print }>
                        <Grid item><Header /></Grid>
                        <Grid item><Body data= { report } isLoad= { isLoad } /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;