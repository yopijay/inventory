// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

const Header = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } style= {{ backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '0 0 15px 0' }}>
            <Grid item md= { 1 }>
                <Ctrl.Typography text= "Category No." color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 2 }>
                <Ctrl.Typography text= "Name" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 5 }>
                <Ctrl.Typography text= "Description" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 1 }>
                <Ctrl.Typography text= "Status" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 2 }>
                <Ctrl.Typography text= "Date Created" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 1 }>
                <Ctrl.Typography text= "Action" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
        </Grid>
    );
}

export default Header;