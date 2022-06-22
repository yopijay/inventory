// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const CircuitBreaker = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().component;
    
    const [ isP, setIsP ] = useState(false);
    const [ isAF, setIsAF ] = useState(false);
    const [ isAT, setIsAT ] = useState(false);
    const [ isKA, setIsKA ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.11" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Circuit Breaker" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "P" />
                <Ctrl.Checkbox name= "component.circuit_breaker.p" size= "large"  checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.p > 0 ? true : isP : isP }
                    register= { register('component.circuit_breaker.p', {
                        onChange: () => setIsP(!isP)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "AF" />
                <Ctrl.Checkbox name= "component.circuit_breaker.af" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.af > 0 ? true : isAF : isAF }
                    register= { register('component.circuit_breaker.af', {
                        onChange: () => setIsAF(!isAF)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "AT" />
                <Ctrl.Checkbox name= "component.circuit_breaker.at" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.at > 0 ? true : isAT : isAT }
                    register= { register('component.circuit_breaker.at', {
                        onChange: () => setIsAT(!isAT)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "KA" />
                <Ctrl.Checkbox name= "component.circuit_breaker.ka" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.ka > 0 ? true : isKA : isKA }
                    register= { register('component.circuit_breaker.ka', {
                        onChange: () => setIsKA(!isKA)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.circuit_breaker.brand" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.circuit_breaker.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
        </Box>
    );
}

export default CircuitBreaker;