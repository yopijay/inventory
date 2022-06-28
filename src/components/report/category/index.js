// Libraries
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Paper, Table, TableContainer } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';
import Export from '../../../core/global/Export';
import Print from '../../../core/global/Print';
import PDF from '../../../core/global/PDF';

// Layouts
import Header from './Header';
import Body from './Body';

// Request
import { reports } from '../../../core/request/Request';

// Assets
import Logo from '../../../assets/images/profile.jpg';

const Index = () => {
    const [ report, setReport ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(true);
    const _print = useRef();

    useEffect(() => {
        reports(setReport, 'category', setIsLoad);
    }, []);

    return (
        <Box sx= {{ marginTop: { xs: '10px', sm: '15px', md: '20px' }, transition: 'all 0.2s ease-in-out' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row"  justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                    <Grid item xs= { 12 } lg= { 2 }>
                        <Ctrl.Typography text= "Category List" 
                            sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    </Grid>
                    <Grid item xs= { 12 } lg= { 10 }>
                        <Grid container direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                            <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                                <PDF name= "Category report" content= { report } logo= {{ img: Logo, w: 10, h: 10, type: 'JPEG' }} 
                                        element= { <Ctrl.Typography color= "#ffffff" text= "Export to PDF" 
                                            sx= {{ padding: { xs: '4px 0' }, fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } />
                            </Grid>
                            <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                                <Print name= "Category report" content= { () => _print.current } 
                                    element= { <Ctrl.Typography color= "#ffffff" text= "Print" 
                                                        sx= {{ padding: { xs: '4px 0' },
                                                            fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } />
                            </Grid>
                            <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                                <Export element= { <Ctrl.Typography color= "#ffffff" text= "Export to Excel" 
                                                                    sx= {{ padding: { xs: '4px 0' },
                                                                                fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } 
                                    filename= "Category Report"
                                    data= { report }
                                    column= { report !== undefined ? (Object.keys(report)).length !== 0 ? Object.keys(report[0]) : [] : [] } />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx= {{ padding: { xs: '0 14px', sm: '0' }, margin: '10px 0' }}>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '50px', width: { xs: '100%', md: '450px' }, padding: '5px 20px' }}>
                    <Ctrl.TextField variant= "standard" fullWidth size= "large" InputProps= {{ disableUnderline: true }} placeholder= "Search..." />
                </Box>
            </Box>
            <Box sx= {{ padding: { xs: '0 14px', sm: '0' } }}>
                <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden' }}>
                    <Paper elevation= { 0 }>
                        <TableContainer ref= { _print }>
                            <Table aria-label= "Category" size= "small" sx= {{ minWidth: 650, maxHeight: 500 }} stickyHeader>
                                <Header />
                                <Body data= { !isLoad ? report : [] } />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;