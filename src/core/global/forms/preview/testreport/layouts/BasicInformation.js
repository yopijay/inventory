// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';

const BasicInformation = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "Project" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": Verdon Pakc - Maurin" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "Serial No." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": 22-KCE-024-1-HP-1244" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "Customer" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= ": DMCI Project Developers Inc." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "Date Performed" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%'  }}>
                        <Ctrl.Typography text= ": 7-7-2022" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BasicInformation;