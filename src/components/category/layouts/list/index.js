// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Request
import { getall } from '../../../../core/request/Request';

// Layout
import Header from './Header';
import Body from './Body';

const Index = (props) => {
    let { setType, setId } = props;
    let [ category, setCategory ] = useState();

    useEffect(() => {
        getall(setCategory, 'category');
    }, []);
    
    return (
        <Box>
            <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item>
                    <Grid container direction= "row"  justifyContent= "flex-end" alignItems= "center">
                        <Grid item xs= { 2 }>
                            <Link to= "/category/form" style= {{ textDecoration: 'none' }} onClick= { () => { setType('new'); setId(undefined); } }>
                                <Box padding= "10px 0" color= "#ffffff" bgcolor= "#2980b9" 
                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">NEW CATEGORY</Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
                        <Grid item><Header /></Grid>
                        <Grid item><Body data= { category } setType= { setType } setId= { setId } /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;