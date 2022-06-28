// Libraries
import React, { useContext, useState } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Constants
import { PowerCable as Cable } from '../../../../../../../core/global/constants/ConstructionInspection';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const PowerCable = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isPowercable, setIsPowercable ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.4" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Power cable ampacity conform to PEC" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.powercable.powercable` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.powercable.powercable > 0 ? true : isPowercable : isPowercable }
                    register= { register(`construction_inspection.powercable.powercable`, {
                        onChange: () => setIsPowercable(!isPowercable)
                    }) } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    {
                        Cable().map(index => (
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key= { index }>
                                {
                                    index.map(index => (
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 15px', width: '250px' }} key= { index }>
                                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', marginRight: '10px', width: '70px' }}>
                                                <Ctrl.TextField name= { `construction_inspection.powercable.pec.mm2_${index}.num` } 
                                                    register= { register(`construction_inspection.powercable.pec.mm2_${index}.num`) }
                                                    sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" fullWidth
                                                    InputProps= {{ disableUnderline: true }} />
                                            </Box>
                                            <Ctrl.Typography text= { index } sx= {{ transition: 'all 0.2s ease-in-out' }} />
                                            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', marginLeft: '10px', minWidth: '70px', maxWidth: '100%' }}>
                                                <Ctrl.TextField name= { `construction_inspection.powercable.pec.mm2_${index}.txt` } 
                                                    register= { register(`construction_inspection.powercable.pec.mm2_${index}.txt`) }
                                                    variant= "standard" fullWidth
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