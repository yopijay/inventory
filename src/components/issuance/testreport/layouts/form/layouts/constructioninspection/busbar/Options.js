// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

import { Busbar } from '../../../../../../../../core/global/constants/ConstructionInspection';

const Options = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                {
                    Busbar().map(index => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key= { index }>
                            {
                                index.map(index => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 10px' }} key= { index }>
                                        <Ctrl.Checkbox name= { `busbar${index}Chck` } size= "large" checked= { false } />
                                        <Ctrl.Typography text= { index } sx= {{ transition: 'all 0.2s ease-in-out' }} />
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', margin: '0 10px' }}>
                                            <Ctrl.TextField name= { `busbar${index}Txt` } type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Options;