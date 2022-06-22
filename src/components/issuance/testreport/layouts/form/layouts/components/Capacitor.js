// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Capacitor = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().component;

    const [ isKVAR, setIsKVAR ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.14" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Capacitor" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "KVAR" />
                <Ctrl.Checkbox name= "component.capacitor.kvar" size= "large" checked= { defaultVal !== undefined ? defaultVal.capacitor.kvar > 0 ? true : isKVAR : isKVAR }
                    register= { register('component.capacitor.kvar', {
                        onChange: () => setIsKVAR(!isKVAR)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.capacitor.brand" size= "large" checked= { defaultVal !== undefined ? defaultVal.capacitor.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.capacitor.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
        </Box>
    );
}

export default Capacitor;