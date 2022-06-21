// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

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
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out',  textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', width: '100%' }}>
                        <Ctrl.TextField name= "moRemarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default MechanicalOperation;