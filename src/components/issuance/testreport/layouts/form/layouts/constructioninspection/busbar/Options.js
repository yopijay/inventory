// Libraries
import React, { useContext } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

import { Busbar } from '../../../../../../../../core/global/constants/ConstructionInspection';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const Options = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                {
                    Busbar().map(index => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key= { index }>
                            {
                                index.map(index => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 10px' }} key= { index }>
                                        <Ctrl.Checkbox name= { `construction_inspection.busbar.options.mm_${index}.chck` } register= { register(`construction_inspection.busbar.options.mm_${index}.chck`) }
                                            size= "large" />
                                        <Ctrl.Typography text= { index } sx= {{ transition: 'all 0.2s ease-in-out' }} />
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', margin: '0 10px' }}>
                                            <Ctrl.TextField name= { `construction_inspection.busbar.options.mm_${index}.txt` } register= { register(`construction_inspection.busbar.options.mm_${index}.txt`) }
                                                type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
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