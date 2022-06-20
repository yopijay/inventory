// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Layouts
import Drawings from './constructioninspection/Drawings';
import Paint from './constructioninspection/Paint';
import Busbar from './constructioninspection/Busbar';
import PowerCable from './constructioninspection/PowerCable';

const ConstructionInspection = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }}>
            <Grid item xs= { 12 }>
                <Drawings />
                <Paint />
                <Busbar />
                <PowerCable />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "c.5"
                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                        <Ctrl.Typography text= "Correct quantity and labels of nameplates"
                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "nameplates" radius= "5px" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Correct quantity and labels of device nos."
                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "devicenos" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ConstructionInspection;