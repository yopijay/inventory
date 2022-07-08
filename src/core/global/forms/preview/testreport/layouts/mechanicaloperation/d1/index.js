// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const mo = data.mechanical_operation;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Ctrl.Typography text= "d.1 Circuit Breaker" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '20%' }} />
            <Ctrl.Typography text= ":" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '3%' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '77%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "On-Off operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.circuit_breaker.onoff.chck : false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "No. of operations" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                            <Ctrl.Typography text= { `${mo !== undefined ? mo.circuit_breaker.onoff.txt !== '' ? mo.circuit_breaker.onoff.txt : '-' : '-'}` } 
                                sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                        </Box>
                        <Ctrl.Typography text= "times" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "Trip operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.circuit_breaker.trip.chck : false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "No. of operations" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                            <Ctrl.Typography text= { `${mo !== undefined ? mo.circuit_breaker.trip.txt !== '' ? mo.circuit_breaker.trip.txt : '-' : '-'}` } 
                                ssx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                        </Box>
                        <Ctrl.Typography text= "times" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "Draw-in/out Operation" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.circuit_breaker.draw.chck : false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '45%' }}>
                        <Ctrl.Typography text= "No. of operations" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                            <Ctrl.Typography text= { `${mo !== undefined ? mo.circuit_breaker.draw.txt !== '' ? mo.circuit_breaker.draw.txt : '-' : '-'}` } 
                                ssx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                        </Box>
                        <Ctrl.Typography text= "times" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;