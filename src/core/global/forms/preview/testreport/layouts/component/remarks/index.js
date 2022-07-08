// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import HNN from './HNN';
import LRN from './LRN';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Ctrl.Typography text= "Remarks" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, fontWeight: 'bold', textTransform: 'uppercase', width: '15%' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '85%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "Quantity" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '100px', textAlign: 'center' }}>
                            <Ctrl.Typography text= { c !== undefined ? c.quantity : '-' } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                        </Box>
                    </Box>
                    <Box sx= {{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box sx= {{ minWidth: '90px' }}><Ctrl.Typography text= "J.O. Number" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '100px', textAlign: 'center' }}>
                            <Ctrl.Typography text= { c !== undefined ? c.jo_number : '-' } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '12px 0' }}>
                    <HNN />
                    <LRN />
                </Box>
                <Box sx= {{ width: '100%', borderBottom: 'solid 1px  #b2bec3' }}><Ctrl.Typography text= { c !== undefined ? c.remarks !== '' ? c.remarks : '-' : '-' } /></Box>
            </Box>
        </Box>
    );
}

export default Index;