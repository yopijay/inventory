// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const C11 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '10px' }}>
            <Ctrl.Typography text= "c.11" sx= {{ margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal', paddingLeft: '10px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Door latche/hinge properly mounted/welded" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_mounted" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with 3-point locking system" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_lock" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with drawing holder/grouding" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_holder" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with stiffeners" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_stiffeners" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Deadfront is align/fit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_deadfront" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with cable holders" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_cable" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Element is align/fit within the enclosure" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= "ci_drawing_element" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default C11;