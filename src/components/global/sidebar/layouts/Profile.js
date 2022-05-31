// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

const Profile = () => {
    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Grid item>
                <Box flexGrow= "1" bgcolor= "#2980b9" width= "100%" height= "200px"></Box>
                <Box bgcolor= "#bdc3c7" width= "150px" margin= "-75px 0 0 17.5%" height= "150px" borderRadius= "100px"></Box>
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "center" style= {{ margin: '20px 0 0 0' }}>
                    <Grid item>
                        Paul John Judan
                    </Grid>
                    <Grid item>
                        IT Programmer
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Profile;