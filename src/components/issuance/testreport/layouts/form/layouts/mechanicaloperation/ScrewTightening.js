// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import BusbarInsulator from './screwtightening/BusbarInsulator';
import Torque from './screwtightening/Torque';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const ScrewTightening = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().mechanical_operation;

    const [ isScrew, setIsScrew ] = useState(false);
    const [ isBolt, setIsBolt ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "d.4" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Bolt / Screw Tightening" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                    <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.screw` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.screw_tightening.screw > 0 ? true : isScrew : isScrew }
                        register= { register(`mechanical_operation.screw_tightening.screw`, {
                            onChange: () => setIsScrew(!isScrew)
                        }) } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', width: '300px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Bolt Marking" /></Box>
                        <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.bolt` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.screw_tightening.bolt > 0 ? true : isBolt : isBolt }
                            register= { register(`mechanical_operation.screw_tightening.bolt`, {
                                onChange: () => setIsBolt(!isBolt)
                            }) } />
                    </Box>
                </Box>
            </Box>
            <BusbarInsulator />
            <Torque />
        </Box>
    );
}

export default ScrewTightening;