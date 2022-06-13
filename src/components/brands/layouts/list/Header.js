// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

const Header = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '10px 15px' }}>
            <Grid item md= { 2 } sx= {{ display: { xs: 'none' } }}>
                <Ctrl.Typography text= "Brand No." color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 5 } md= { 2 }>
                <Ctrl.Typography text= "Name" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 2 } sx= {{ display: { xs: 'none' } }}>
                <Ctrl.Typography text= "Description" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 4 } md= { 1 }>
                <Ctrl.Typography text= "Category" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 1 } sx= {{ display: { xs: 'none' } }}>
                <Ctrl.Typography text= "Status" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 2 } sx= {{ display: { xs: 'none' } }}>
                <Ctrl.Typography text= "Date Created" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 3 } md= { 2 }>
                <Ctrl.Typography text= "Action" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
        </Grid>
    );
}

export default Header;