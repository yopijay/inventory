// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const c11 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '20px', margin: '10px 0' }}>
            <Ctrl.Typography text= "c.11" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '40px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Door latches/hinges properly mounted/welded" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Provided 3-point locking system" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Provided with drawing holder/grounding" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Provided with stiffeners" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Deadfront is align/lift" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%', margin: '0 5px' }}>
                        <Ctrl.Typography text= "Provided with cable holders" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '85%' }} />
                        <Ctrl.Checkbox />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default c11;