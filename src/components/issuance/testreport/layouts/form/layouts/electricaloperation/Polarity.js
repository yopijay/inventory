// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const Polarity = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().electrical_operation;

    const [ isPs, setIsPs ] = useState(false);
    const [ isRc, setIsRc ] = useState(false);
    const [ isGc, setIsGc ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.5" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Continuity / Polarity Test" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.31" sx= {{ margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Power supply / Control Unit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Ctrl.Checkbox name= { `electrical_operation.polarity.power_supply` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.polarity.power_supply > 0 ? true : isPs : isPs }
                        register= { register(`electrical_operation.polarity.power_supply`, {
                            onChange: () => setIsPs(!isPs)
                        }) } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 10px' }}>
                    <Ctrl.Typography text= "Metering / Relaying Circuit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Ctrl.Checkbox name= { `electrical_operation.polarity.relaying_circuit` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.polarity.relaying_circuit > 0 ? true : isRc : isRc }
                        register= { register(`electrical_operation.polarity.relaying_circuit`, {
                            onChange: () => setIsRc(!isRc)
                        }) } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "Grounding Circuit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Ctrl.Checkbox name= { `electrical_operation.polarity.grounding_circuit` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.polarity.grounding_circuit > 0 ? true : isGc : isGc }
                        register= { register(`electrical_operation.polarity.grounding_circuit`, {
                            onChange: () => setIsGc(!isGc)
                        }) } />
                </Box>
            </Box>
        </Box>
    );
}

export default Polarity;