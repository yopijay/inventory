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
                <Ctrl.Typography text= "c.3" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Busbar ampacity complies with Manufacturer`s standard on current density" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_busbar" size= "large" checked= { false } />
            </Box>
            <Options />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.31" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Grounding" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_busbar_rounding" size= "large" checked= { false } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Box><Ctrl.Typography color= "#2c3e50" text= "Neutral" /></Box>
                    <Box><Ctrl.Checkbox name= "ci_busbar_neutral" size= "large" checked= { false } /></Box>
                </Box>
            </Box>
            <CrimpingLugs />
            <MCM />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.33" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct size / quantity of bolts on each interconnection" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_busbar_bolts" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.34" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct spacing / quantity of busbar support" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_busbar_busbarsupport" size= "large" checked= { false } />
            </Box>
            <PEC />
        </Box>
    );
}

export default Busbar;