// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

const Header = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '10px 15px' }}>
            <Grid item sm= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                <Ctrl.Typography text= "Series no." color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 5 } sm= { 4 }>
                <Ctrl.Typography text= "Category" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 3 } sm= { 3 } sx= {{ textAlign: 'center' }}>
                <Ctrl.Typography text= "No. of Brands" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 4 } sm= { 3 } sx= {{ textAlign: 'center' }}>
                <Ctrl.Typography text= "Action" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
        </Grid>
    );
}

export default Header;