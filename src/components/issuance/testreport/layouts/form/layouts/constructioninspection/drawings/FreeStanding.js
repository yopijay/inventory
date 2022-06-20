// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const FreeStanding = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, margin: '0 20px' }}>
            <Box>
                <Ctrl.Checkbox name= "freeStanding" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Free-Standing" /></Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                <Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "freeStandingW" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "H:" /></Box>
                <Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "freeStandingH" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "D:" /></Box>
                <Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "freeStandingD" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FreeStanding;