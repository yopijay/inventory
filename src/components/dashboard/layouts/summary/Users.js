// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Request
import { count } from '../../../../core/request/Request';

const Users = () => {
    let [ user, setCountUser ] = useState();

    useEffect(() => {
        count(setCountUser, 'users');
    }, []);

    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Grid item>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#3498db" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL USERS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { user !== undefined ? user : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Users;