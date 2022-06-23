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
                <Ctrl.Typography text= "c.4" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Power cable ampacity conform to PEC" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_pc_cable" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    {
                        Cable().map(index => (
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key= { index }>
                                {
                                    index.map(index => (
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 10px', width: '200px' }} key= { index }>
                                            <Ctrl.Checkbox name= { `ci_pc_cable${index}_chck` } size= "large" checked= { false } />
                                            <Ctrl.Typography text= { index } sx= {{ transition: 'all 0.2s ease-in-out' }} />
                                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', marginLeft: '10px', width: '100%' }}>
                                                <Ctrl.TextField name= { `ci_pc_cable${index}_txt` } type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" fullWidth
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