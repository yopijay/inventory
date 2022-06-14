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
    const [ brands, setBrands ] = useState();
    const [ isLoad, setIsLoad ] = useState(true);

    useEffect(() => {
        getall(setBrands, 'brand', setIsLoad);
    }, []);
    
    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Grid item>
                <Grid container direction= "row"  justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                    <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                        <Link to= "/maintenance/brand/form/new" style= {{ textDecoration: 'none' }}>
                            <Box display= "flex" flexDirection= "column" justifyContent= "center" alignItems= "center">
                                <Ctrl.Typography color= "#ffffff" text= "NEW BRAND" 
                                    sx= {{ padding: { xs: '10px 12px', sm: '7px 10px', md: '10px 0', backgroundColor: '#2980b9',
                                                fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }, margin: { xs: '20px 0 0 0', sm: 0 } }} />
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs= { 12 } sm= { 4 } lg= { 3 }>
                        <Box sx= {{ backgroundColor: '#00b894', textAlign: 'center', padding: { xs: '10px 12px', sm: '7px 12px', md: '10px 15px' }, borderRadius: '5px' }}>
                            <Export element= {
                                    <button 
                                        style= {{ backgroundColor: 'transparent', border: 'none', fontFamily: 'Gilroy Light', margin: 0, padding: 0 }}>
                                        <Ctrl.Typography color= "#ffffff" text= "EXPORT TO EXCEL" sx= {{ fontSize: { xs: '120%', sm: '110%', md: '120%' } }} />
                                    </button>
                                } 
                                filename= "Brands List"
                                data= { brands }
                                column= { brands !== undefined ? Object.keys(brands[0]) : [] } />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } sx= {{ marginTop: { xs: 0, sm: '-25px', md: '-30px' } }}>
                    <Grid item><Ctrl.TextField name= "search" border= "solid 1px #bdc3c7" radius= "30px" padding= "8px 15px 4px 15px" size= "small" placeholder= "Search..." /></Grid>
                    <Grid item><Header /></Grid>
                    <Grid item><Body data= { brands } isLoad= { isLoad } /></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Index;