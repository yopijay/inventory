// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

const Header = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '10px 15px' }}>
            <Grid item sm= { 3 } md= { 2 } lg= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                <Ctrl.Typography text= "Category No." color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 8 } sm= { 5 } md= { 3 } lg= { 3 }>
                <Ctrl.Typography text= "Name" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item md= { 3 } lg= { 2 } sx= {{ display: { xs: 'none', md: 'block' } }}>
                <Ctrl.Typography text= "Description" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item sm= { 2 } md= { 2 } lg= { 1 } sx= {{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
                <Ctrl.Typography text= "Status" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item lg= { 2 } sx= {{ display: { xs: 'none', lg: 'block' } }}>
                <Ctrl.Typography text= "Date Created" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
            <Grid item xs= { 4 } sm= { 2 } md= { 2 } lg= { 2 } sx= {{ textAlign: 'center' }}>
                <Ctrl.Typography text= "Action" color= "#34495e" sx= {{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
            </Grid>
        </Grid>
    );
}

export default Header;