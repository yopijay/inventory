// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

const Header = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '10px 15px' }}>
            <Grid item lg= { 1 } sx= {{ display: { xs: 'none', lg: 'block' } }}>
                <Ctrl.Typography text= "Assign Asset No." color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 3 } md= { 3 } lg= { 2 }>
                <Ctrl.Typography text= "Asset Name" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 4 } md= { 3 } lg= { 3 }>
                <Ctrl.Typography text= "Assigned To" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 2 } md= { 2 } lg= { 1 } sx= {{ textAlign: 'center' }}>
                <Ctrl.Typography text= "Quantity" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 2 } lg= { 1 } sx= {{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}>
                <Ctrl.Typography text= "Status" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item lg= { 2 } sx= {{ display: { xs: 'none', lg: 'block' } }}>
                <Ctrl.Typography text= "Date Created" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 3 } md= { 2 } sx= {{ textAlign: 'center' }}>
                <Ctrl.Typography text= "Action" color= "#34495e" style= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
        </Grid>
    );
}

export default Header;