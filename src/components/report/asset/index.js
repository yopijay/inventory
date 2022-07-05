// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Paper, Table, TableContainer } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Layouts
import Header from './Header';
import Body from './Body';
import Dialog from '../../../core/global/forms/Dialog';
import Preview from '../../../core/global/forms/preview/report';

// Request
import { reports } from '../../../core/request/Request';

// Assets
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

// Context
import { DialogContext } from '../../../core/context/DialogContext';

const Index = () => {
    const [ report, setReport ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(true);
    const { setIsOpen } = useContext(DialogContext);

    useEffect(() => {
        reports(setReport, 'assets', setIsLoad);
    }, []);

    return (
        <Box sx= {{ marginTop: { xs: '10px', sm: '15px', md: '20px' }, transition: 'all 0.2s ease-in-out' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row"  justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                    <Grid item xs= { 12 } lg= { 2 }>
                        <Ctrl.Typography text= "Assets List" 
                            sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    </Grid>
                    <Grid item xs= { 12 } lg= { 10 }>
                        <Grid container direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                            <Grid item xs= { 2 } sm= { 1 }>
                                <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" onClick= { () => setIsOpen(true) }>
                                    <LocalPrintshopIcon style= {{ fontSize: '110%' }} />
                                </Box>
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
                        <TableContainer>
                            <Table aria-label= "Assets" size= "small" sx= {{ minWidth: 650, maxHeight: 500 }} stickyHeader>
                                <Header />
                                <Body data= { report } isLoad= { isLoad } />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
            <Dialog name= "assets" content= { <Preview name= "assets" data= { report } /> } />
        </Box>
    );
}

export default Index;