// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const CircuitBreaker = () => {
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
                        <Ctrl.Checkbox name= "mo_cb_onoff_chck" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= "mo_cb_onoff_txt" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Trip Operation" /></Box>
                        <Ctrl.Checkbox name= "mo_cb_trip_chck" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= "mo_cb_trip_txt" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Draw-in/out Operation" /></Box>
                        <Ctrl.Checkbox name= "mo_cb_draw_chck" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= "mo_cb_draw_txt" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
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