// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';
import Export from '../../../../core/global/Export';

// Request
import { getall } from '../../../../core/request/Request';

// Layout
import Header from './Header';
import Body from './Body';

const Index = () => {
    let [ brands, setBrands ] = useState();

    useEffect(() => {
        getall(setBrands, 'brand');
    }, []);
    
    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Grid item>
                <Grid container direction= "row"  justifyContent= "flex-end" alignItems= "center">
                    <Grid item xs= { 2 }>
                        <Link to= "/maintenance/brand/form/new" style= {{ textDecoration: 'none' }}>
                            <Box padding= "10px 0" color= "#ffffff" bgcolor= "#2980b9" 
                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">NEW BRAND</Box>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Grid item>
                        <Box display= "flex" flexDirection= "row" justifyContent= "space-between" alignItems= "center">
                            <Box width= "450px" padding= "0 20px 0 0">
                                <Ctrl.TextField name= "search" border= "solid 1px #bdc3c7" radius= "30px" padding= "8px 15px 4px 15px" size= "small" placeholder= "Search..." />
                            </Box>
                            <Box padding= "0 0 0 20px">
                                <Box sx= {{ width: 'width%', backgroundColor: '#00b894', textAlign: 'center', padding: '8px 15px', borderRadius: '5px' }}>
                                    <Export element= {
                                            <button 
                                                style= {{ backgroundColor: 'transparent', border: 'none',
                                                                color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light' }}>Export to Excel</button>
                                        } 
                                        filename= "Brand List"
                                        data= { brands }
                                        column= { brands !== undefined ? Object.keys(brands[0]) : [] } />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item><Header /></Grid>
                    <Grid item><Body data= { brands } /></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Index;