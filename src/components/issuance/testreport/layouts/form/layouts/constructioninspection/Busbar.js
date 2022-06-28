// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import Options from './busbar/Options';
import CrimpingLugs from './CrimpingLugs';
import MCM from './busbar/MCM';
import PEC from './PEC';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const Busbar = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isBusbar, setIsBusbar ] = useState(false);
    const [ isGrounding, setIsGrounding ] = useState(false);
    const [ isNeutral, setIsNeutral ] = useState(false);
    const [ isBolts, setIsBolts ] = useState(false);
    const [ isSupport, setIsSupport ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.3" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Busbar ampacity complies with Manufacturer`s standard on current density" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.busbar.busbar` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.busbar.busbar > 0 ? true : isBusbar : isBusbar }
                    register= { register(`construction_inspection.busbar.busbar`, {
                        onChange: () => setIsBusbar(!isBusbar)
                    }) } />
            </Box>
            <Options />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.31" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Grounding" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.busbar.grounding` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.busbar.grounding > 0 ? true : isGrounding : isGrounding }
                    register= { register(`construction_inspection.busbar.grounding`, {
                        onChange: () => setIsGrounding(!isGrounding)
                    }) } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" margin= "0 20px" width= "150px">
                    <Ctrl.Typography color= "#2c3e50" text= "Neutral" />
                    <Ctrl.Checkbox name= { `construction_inspection.busbar.neutral` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.busbar.neutral > 0 ? true : isNeutral : isNeutral }
                    register= { register(`construction_inspection.busbar.neutral`, {
                        onChange: () => setIsNeutral(!isNeutral)
                    }) } />
                </Box>
            </Box>
            <CrimpingLugs />
            <MCM />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.33" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct size / quantity of bolts on each interconnection" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.busbar.bolts` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.busbar.bolts > 0 ? true : isBolts : isBolts }
                    register= { register(`construction_inspection.busbar.bolts`, {
                        onChange: () => setIsBolts(!isBolts)
                    }) } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.34" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct spacing / quantity of busbar support" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.busbar.support` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.busbar.support > 0 ? true : isSupport : isSupport }
                    register= { register(`construction_inspection.busbar.support`, {
                        onChange: () => setIsSupport(!isSupport)
                    }) } />
            </Box>
            <PEC />
        </Box>
    );
}

export default Busbar;