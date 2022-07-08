// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../controls/Controls';
import { getDate } from '../../../../Function';

// Context
import { DialogContext } from '../../../../../context/DialogContext';

const BasicInformation = () => {
    const { data } = useContext(DialogContext);
    const bi = data.basic_information;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "Project" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= {`: ${bi !== undefined ? bi.project : '-' }`} 
                            sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "Serial No." sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= {`: ${bi !== undefined ? bi.serial_no : '-' }`} sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "Customer" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%' }}>
                        <Ctrl.Typography text= {`: ${bi !== undefined ? bi.name : '-' }`} sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '49%' }}>
                    <Box sx= {{ minWidth: '140px' }}><Ctrl.Typography text= "Date Performed" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '100%'  }}>
                        <Ctrl.Typography text= {`: ${bi !== undefined ? getDate(new Date(bi.date_performed)).formatted : '-' }`} sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BasicInformation;