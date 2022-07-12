// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Table, TableContainer } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
// import Export from '../../../../../core/global/forms/Export';
import { getall } from '../../../../../core/request/Request';

// Layouts
import Header from './Header';
import Body from './Body';
import Dialog from '../../../../../core/global/forms/Dialog';
import Preview from '../../../../../core/global/forms/preview/testreport';

// Assets
// import ArticleIcon from '@mui/icons-material/Article';

const Index = () => {
    const [ testreport, setTestreport ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(true);

    useEffect(() => {
        getall(setTestreport, 'test_report', setIsLoad);
    }, []);
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginBottom: '20px' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row"  justifyContent= "space-between" alignItems= "center">
                    <Grid item xs= { 12 } sm= { 2 }>
                        <Ctrl.Typography text= "Test Report List" 
                            sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    </Grid>
                    <Grid item xs= { 12 } sm= { 10 }>
                        <Grid container direction= "row" justifyContent= "flex-end" alignItems= "center">
                            <Grid item xs= { 4 } md= { 5 } lg= { 3 }>
                                <Link to= "/issuance/test-report/form/new" style= {{ textDecoration: 'none' }}>
                                    <Ctrl.Button color= "primary" text= {
                                        <Ctrl.Typography color= "#ffffff" text= "New Test Report" 
                                            sx= {{ padding: { xs: '1.9px 0' },
                                                        fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained" />
                                </Link>
                            </Grid>
                            {/* <Grid item xs= { 2 } sm= { 1 }>
                                <Export filename= "Test Report List" data= { [] } 
                                    column= { [] }
                                    element= { 
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px', cursor: 'pointer' }}>
                                            <ArticleIcon sx= {{ fontSize: '235%', padding: '6px', backgroundColor: '#1b8a0d', borderRadius: '5px', color: '#FFFFFF' }} />
                                        </Box> } />
                            </Grid> */}
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
                            <Table aria-label= "Assets Issued" size= "small" sx= {{ minWidth: 650, maxHeight: 500 }} stickyHeader>
                                <Header />
                                <Body data= { testreport } isLoad= { isLoad } />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
            <Dialog name= "test_report" content= { <Preview name= "test_report" /> } />
        </Box>
    );
}

export default Index;