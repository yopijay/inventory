// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const b11 = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ctrl.Typography text= "b.11 Circuit Breaker" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '23%', paddingLeft: '20px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '77%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "P" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { c !== undefined ? c.circuit_breaker.p : false } disabled />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "AF" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { c !== undefined ? c.circuit_breaker.af : false } disabled />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "AT" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { c !== undefined ? c.circuit_breaker.at : false } disabled />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "KA" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { c !== undefined ? c.circuit_breaker.ka : false } disabled />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "Brand" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Checkbox checked= { c !== undefined ? c.circuit_breaker.brand : false } disabled />
                </Box>
            </Box>
        </Box>
    );
}

export default b11;