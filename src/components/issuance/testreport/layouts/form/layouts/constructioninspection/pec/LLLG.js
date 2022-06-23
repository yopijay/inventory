// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const LLLG = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '400px', margin: '0 25px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'ce', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-L distance" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "ci_pec_ll_distance" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "ci_pec_ll_shrinkabletube" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "ci_pec_ll_barrier" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '400px', margin: '0 25px'  }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-G distance" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "ci_pec_lg_distance" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "ci_pec_lg_shrinkabletube" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= "ci_pec_lg_barrier" radius= "5px" size= "large" checked= { false } />
                    <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default LLLG;