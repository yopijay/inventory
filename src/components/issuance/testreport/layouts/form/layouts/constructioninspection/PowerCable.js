// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Constants
import { PowerCable as Cable } from '../../../../../../../core/global/constants/ConstructionInspection';

const PowerCable = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.4"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Power cable ampacity conform to PEC"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "cable" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    {
                        Cable().map(index => (
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key= { index }>
                                {
                                    index.map(index => (
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 10px' }} key= { index }>
                                            <Ctrl.Checkbox name= { `cable${index}Chck` } radius= "5px" size= "large" checked= { false } />
                                            <Ctrl.Typography text= { index }
                                                sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', margin: '0 10px' }}>
                                                <Ctrl.TextField name= { `cable${index}Txt` } type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                                    InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm<sup>2</sup></InputAdornment> }} />
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default PowerCable;