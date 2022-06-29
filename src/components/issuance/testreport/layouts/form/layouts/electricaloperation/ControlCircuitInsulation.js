// Libraries
import React, { useContext } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layouts
import CCIRTable from './tables/CCIRTable';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const ControlCircuitInsulation = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().electrical_operation;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.2" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Control Circuit Insulation Resistance Test" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "Equipment No.:" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `electrical_operation.ccirt.equipno` } register= { register(`electrical_operation.ccirt.equipno`) }
                            sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" InputProps= {{ disableUnderline: true }} />
                    </Box>
                </Box>
            </Box>
            <CCIRTable />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <Ctrl.Typography text= "Note: All result value in are Mega-Ohms/Giga-Ohms."
                    sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', margin: '10px 0' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 20px' }}>
                        <Ctrl.Typography text= "Amb. Temp."
                            sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', margin: '0 10px' }}>
                            <Ctrl.TextField name= { `electrical_operation.ccirt.ambtemp` } register= { register(`electrical_operation.ccirt.ambtemp`) }
                                sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">℃</InputAdornment> }} />
                        </Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 20px' }}>
                        <Ctrl.Typography text= "Humidity"
                            sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', margin: '0 10px' }}>
                            <Ctrl.TextField name= { `electrical_operation.ccirt.humidity` } register= { register(`electrical_operation.ccirt.humidity`) }
                                sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">%</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ControlCircuitInsulation;