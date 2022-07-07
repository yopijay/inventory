// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import List from '../../../../../../list';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ width: '60%' }}><Ctrl.Typography text= "e.2 CONTROL CIRCUIT INSULATION RESISTANCE TEST" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '40%' }}>
                    <Ctrl.Typography text= "EQUIPMENT NO.:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
            <Box sx= {{ width: '100%' }}><List data= { [] } /></Box>
            <Ctrl.Typography text= "Note: All result value in are Mega-Ohms\Giga-Ohms." sx= {{ fontSize: { xs: '95%' } }} />
            <Box sx= {{ display: 'flex', flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '40%' }}>
                    <Ctrl.Typography text= "Amb. Temp." sx= {{ fontSize: { xs: '95%', sm: '100%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "℃" sx= {{ fontSize: { xs: '95%', sm: '100%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '40%' }}>
                    <Ctrl.Typography text= "Humidity" sx= {{ fontSize: { xs: '95%', sm: '100%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "%" sx= {{ fontSize: { xs: '95%', sm: '100%' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;