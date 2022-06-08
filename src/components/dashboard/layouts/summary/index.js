// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Layouts
import Users from './Users';
import Brands from './Brand';
import Categories from './Category';
import Assets from './Asset';

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 } md= { 3 }>
                <Users />
            </Grid>
            <Grid item xs= { 12 } md= { 3 }>
                <Brands />
            </Grid>
            <Grid item xs= { 12 } md= { 3 }>
                <Categories />
            </Grid>
            <Grid item xs= { 12 } md= { 3 }>
                <Assets />
            </Grid>
        </Grid>
    );
}

export default Index;