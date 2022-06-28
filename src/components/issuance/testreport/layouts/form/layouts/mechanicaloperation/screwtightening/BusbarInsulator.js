// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const BusbarInsulator = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().mechanical_operation;

    const [ isInsulator, setIsInsulator ] = useState(false);
    const [ isPowercables, setIsPowercables ] = useState(false);
    const [ isControlcables, setIsControlcables ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "d.41" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Busbar / Insulators" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.insulator` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.screw_tightening.insulator > 0 ? true : isInsulator : isInsulator }
                    register= { register(`mechanical_operation.screw_tightening.insulator`, {
                        onChange: () => setIsInsulator(!isInsulator)
                    }) } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 20px' }}>
                <Ctrl.Typography text= "Power Cables" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.powercables` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.screw_tightening.powercables > 0 ? true : isPowercables : isPowercables }
                    register= { register(`mechanical_operation.screw_tightening.powercables`, {
                        onChange: () => setIsPowercables(!isPowercables)
                    }) } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "Control Cables" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.controlcables` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.screw_tightening.controlcables > 0 ? true : isControlcables : isControlcables }
                    register= { register(`mechanical_operation.screw_tightening.controlcables`, {
                        onChange: () => setIsControlcables(!isControlcables)
                    }) } />
            </Box>
        </Box>
    );
}

export default BusbarInsulator;