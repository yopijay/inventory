// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import Options from './busbar/Options';
import CrimpingLugs from './CrimpingLugs';
import MCM from './busbar/MCM';
import PEC from './PEC';

const Busbar = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.3"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Busbar ampacity complies with Manufacturer`s standard on current density"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "busbar" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Options />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.31"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Grounding"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "grounding" radius= "5px" size= "large" checked= { false } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Box><Ctrl.Typography color= "#2c3e50" text= "Neutral" /></Box>
                    <Box>
                        <Ctrl.Checkbox name= "neutral" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
            <CrimpingLugs />
            <MCM />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.33"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct size / quantity of bolts on each interconnection"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "bolts" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.34"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct spacing / quantity of busbar support"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "busbarsupport" radius= "5px" size= "large" checked= { false } />
            </Box>
            <PEC />
        </Box>
    );
}

export default Busbar;