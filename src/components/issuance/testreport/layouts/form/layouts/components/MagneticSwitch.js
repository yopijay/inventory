// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const MagneticSwitch = () => {
    const { type } = useParams();
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isAF, setIsAF ] = useState(false);
    const [ isOLR, setIsOLR ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.13" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Magnetic Switch" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "AF" />
                <Ctrl.Checkbox name= "component.magnetic_switch.af" size= "large" checked= { defaultVal !== undefined ? defaultVal.magnetic_switch.af > 0 ? true : isAF : isAF }
                    register= { register('component.magnetic_switch.af', {
                        onChange: () => setIsAF(!isAF)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "OLR" />
                <Ctrl.Checkbox name= "component.magnetic_switch.olr" size= "large" checked= { defaultVal !== undefined ? defaultVal.magnetic_switch.olr > 0 ? true : isOLR : isOLR }
                    register= { register('component.magnetic_switch.olr', {
                        onChange: () => setIsOLR(!isOLR)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.magnetic_switch.brand" size= "large" checked= { defaultVal !== undefined ? defaultVal.magnetic_switch.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.magnetic_switch.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default MagneticSwitch;