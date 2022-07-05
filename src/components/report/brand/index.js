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
import Logo from '../../../assets/images/logo.png';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';

const Index = () => {
    const [ report, setReport ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(true);
    const _print = useRef();

    useEffect(() => {
        reports(setReport, 'brand', setIsLoad);
    }, []);

    return (
        <Box sx= {{ marginTop: { xs: '10px', sm: '15px', md: '20px' }, transition: 'all 0.2s ease-in-out' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row"  justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                    <Grid item xs= { 12 } lg= { 2 }>
                        <Ctrl.Typography text= "Brand List" 
                            sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    </Grid>
                    <Grid item xs= { 12 } lg= { 10 }>
                        <Grid container direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                            <Grid item xs= { 2 } sm= { 1 }>
                                <PDF name= "Brand report" content= { report } logo= {{ img: Logo, w: 20, h: 20, type: 'PNG' }} type= "report"
                                        element= { <PictureAsPdfIcon sx= {{ fontSize: { xs: '130%' } }} /> } />
                            </Grid>
                            <Grid item xs= { 2 } sm= { 1 }>
                                <Print name= "Brand report" content= { () => _print.current } 
                                    element= { <LocalPrintshopIcon sx= {{ fontSize: { xs: '130%' } }} /> } />
                            </Grid>
                            <Grid item xs= { 2 } sm= { 1 }>
                                <Export element= { <ArticleIcon sx= {{ fontSize: { xs: '130%' } }} /> } 
                                    filename= "Brand Report"
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
                            <Table aria-label= "Brand" size= "small" sx= {{ minWidth: 650, maxHeight: 500 }} stickyHeader>
                                <Header />
                                <Body data= { report } isLoad= { isLoad } />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;