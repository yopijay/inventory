// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Table, TableContainer } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import Export from '../../../../../core/global/Export';

// Request
import { excel, getall } from '../../../../../core/request/Request';

// Layout
import Header from './Header';
import Body from './Body';

// Assets
import ArticleIcon from '@mui/icons-material/Article';

const Index = () => {
    const [ assets, setAssets ] = useState([]);
    const [ xlsx, setXlsx ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(true);

    useEffect(() => {
        excel(setXlsx, 'assets', setIsLoad);
        getall(setAssets, 'assets', setIsLoad);
    }, []);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginBottom: '20px' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row"  justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                    <Grid item xs= { 12 } sm= { 2 }>
                        <Ctrl.Typography text= "Assets List" 
                            sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    </Grid>
                    <Grid item xs= { 12 } sm= { 10 }>
                        <Grid container direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                            <Grid item xs= { 6 } sm= { 4 } md= { 5 } lg= { 3 }>
                                <Link to= "/maintenance/assets/form/new" style= {{ textDecoration: 'none' }}>
                                    <Ctrl.Button color= "primary" text= {
                                        <Ctrl.Typography color= "#ffffff" text= "New Asset" 
                                            sx= {{ padding: { xs: '1.9px 0' },
                                                        fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained" />
                                </Link>
                            </Grid>
                            <Grid item xs= { 2 } sm= { 1 }>
                                <Export element= { <ArticleIcon sx= {{ fontSize: { xs: '130%' } }} /> } 
                                    filename= "Assets List"
                                    data= { xlsx }
                                    column= { xlsx !== undefined ? (Object.keys(xlsx)).length !== 0 ? Object.keys(xlsx[0]) : [] : [] } />
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
                                <Body data= { assets } isLoad= { isLoad } />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;