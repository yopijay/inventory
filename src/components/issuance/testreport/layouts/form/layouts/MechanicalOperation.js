// Libraries
import React from 'react';
import { Grid } from '@mui/material';

// Layouts
import CircuitBreaker from './mechanicaloperation/CircuitBreaker';
import LoadBreaker from './mechanicaloperation/LoadBreaker';
import MagneticSwitch from './mechanicaloperation/MagneticSwitch';
import ScrewTightening from './mechanicaloperation/ScrewTightening';

const MechanicalOperation = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }}>
            <Grid item xs= { 12 }>
                <CircuitBreaker />
                <LoadBreaker />
                <MagneticSwitch />
                <ScrewTightening />
            </Grid>
        </Grid>
    );
}

export default MechanicalOperation;