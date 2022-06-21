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
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Ctrl.Typography text= "Remarks"
                            sx= {{ paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out', 
                                        textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                    </Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', width: '100%' }}>
                        <Ctrl.TextField name= "moRemarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default MechanicalOperation;