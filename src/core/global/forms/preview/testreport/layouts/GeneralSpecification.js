// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

const GeneralSpecification = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '20px 0 10px 0' }}>
            <Ctrl.Typography text= "A. General Specification" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '130px', width: '200px' }}><Ctrl.Typography text= "Panel Name" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": PP - Guardhouse" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "System Voltage" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%'  }}>
                        <Ctrl.Typography text= ": 230v" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '130px', width: '200px' }}><Ctrl.Typography text= "Enclosure Type" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": Wall mounted" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "Phase / Wire" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%'  }}>
                        <Ctrl.Typography text= ": 14, 2wt6" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '130px', width: '200px' }}><Ctrl.Typography text= "Color" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": Wrinkled Gray" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default GeneralSpecification;