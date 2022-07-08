// Libraries
import { Box } from '@mui/material';
import React from 'react';

// Core
import Ctrl from '../../../../controls/Controls';

const Signature = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '20px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 0' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                    <Box sx= {{ minWidth: '100px' }}><Ctrl.Typography text= "Tested by:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50%' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                    <Box sx= {{ minWidth: '120px' }}><Ctrl.Typography text= "Witnessed by:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50%' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 0' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                    <Box sx= {{ minWidth: '100px' }}><Ctrl.Typography text= "Noted by:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} /></Box>
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50%' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Signature;