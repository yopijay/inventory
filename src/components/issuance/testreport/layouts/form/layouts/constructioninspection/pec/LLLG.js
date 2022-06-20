// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const LLLG = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 40px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '500px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-L distance"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "lldistance" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "llShrinkabletube" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "llBarrier" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ barrier"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '500px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-G distance"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "lgdistance" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "lgShrinkabletube" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "lgBarrier" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ barrier"
                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default LLLG;