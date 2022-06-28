// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const CircuitBreaker = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().mechanical_operation;

    const [ isOnOff, setIsOnOff ] = useState(false);
    const [ isTrip, setIsTrip ] = useState(false);
    const [ isDraw, setIsDraw ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "d.1" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Circuit Breaker" sx= {{ width: '210px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "On-Off Operation" /></Box>
                        <Ctrl.Checkbox name= { `mechanical_operation.circuit_breaker.onoff.chck` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.onoff.chck > 0 ? true : isOnOff : isOnOff }
                            register= { register(`mechanical_operation.circuit_breaker.onoff.chck`, {
                                onChange: () => setIsOnOff(!isOnOff)
                            }) } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= { `mechanical_operation.circuit_breaker.onoff.txt` } register= { register(`mechanical_operation.circuit_breaker.onoff.txt`) }
                                    sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Trip Operation" /></Box>
                        <Ctrl.Checkbox name= { `mechanical_operation.circuit_breaker.trip.chck` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.trip.chck > 0 ? true : isTrip : isTrip }
                            register= { register(`mechanical_operation.circuit_breaker.trip.chck`, {
                                onChange: () => setIsTrip(!isTrip)
                            }) } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= { `mechanical_operation.circuit_breaker.trip.txt` } register= { register(`mechanical_operation.circuit_breaker.trip.txt`) }
                                    sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Draw-in/out Operation" /></Box>
                        <Ctrl.Checkbox name= { `mechanical_operation.circuit_breaker.draw.chck` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.circuit_breaker.draw.chck > 0 ? true : isDraw : isDraw }
                            register= { register(`mechanical_operation.circuit_breaker.draw.chck`, {
                                onChange: () => setIsDraw(!isDraw)
                            }) } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= { `mechanical_operation.circuit_breaker.draw.txt` } register= { register(`mechanical_operation.circuit_breaker.draw.txt`) }
                                    sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CircuitBreaker;