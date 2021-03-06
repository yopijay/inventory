// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const CircuitBreaker = () => {
    const { type } = useParams()
    const { register, getValues } = useContext(TestReportContext);
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
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "P" />
                <Ctrl.Checkbox name= "component.circuit_breaker.p" size= "large"  checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.p > 0 ? true : isP : isP }
                    register= { register('component.circuit_breaker.p', {
                        onChange: () => setIsP(!isP)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "AF" />
                <Ctrl.Checkbox name= "component.circuit_breaker.af" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.af > 0 ? true : isAF : isAF }
                    register= { register('component.circuit_breaker.af', {
                        onChange: () => setIsAF(!isAF)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "AT" />
                <Ctrl.Checkbox name= "component.circuit_breaker.at" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.at > 0 ? true : isAT : isAT }
                    register= { register('component.circuit_breaker.at', {
                        onChange: () => setIsAT(!isAT)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "KA" />
                <Ctrl.Checkbox name= "component.circuit_breaker.ka" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.ka > 0 ? true : isKA : isKA }
                    register= { register('component.circuit_breaker.ka', {
                        onChange: () => setIsKA(!isKA)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.circuit_breaker.brand" size= "large" checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.circuit_breaker.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default CircuitBreaker;