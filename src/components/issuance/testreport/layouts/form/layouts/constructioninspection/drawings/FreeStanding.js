// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const FreeStanding = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, marginTop: '10px' }}>
            <Box><Ctrl.Checkbox name= "ci_drawing_fs" size= "large" checked= { false } /></Box>
            <Box sx= {{ margin: '0 10px', minWidth: '230px' }}><Ctrl.Typography color= "#2c3e50" text= "Free-Standing" /></Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= "ci_drawing_fs_w" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "H:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= "ci_drawing_fs_h" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "D:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= "ci_drawing_fs_d" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
        </Box>
    );
}

export default FreeStanding;