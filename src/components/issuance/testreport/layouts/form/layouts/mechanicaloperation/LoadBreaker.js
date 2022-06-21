// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const LoadBreaker = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, marginTop: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "d.2" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Load Breaker Switch" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "On-Off Operation" /></Box>
                        <Ctrl.Checkbox name= "mo_lb_onoff_chck" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= "mo_lb_onoff_txt" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                    InputProps= {{ disableUnderline: true }} />
                            </Box>
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "times" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Trip Operation" /></Box>
                        <Ctrl.Checkbox name= "mo_lb_trip_chck" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '300px' }}>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "No. of operations" /></Box>
                        <Box>
                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                <Ctrl.TextField name= "mo_lb_trip_txt" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
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

export default LoadBreaker;