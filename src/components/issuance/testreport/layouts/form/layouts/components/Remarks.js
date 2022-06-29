// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const Remarks = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isHNN, setIsHNN ] = useState(false);
    const [ isLRN, setIsLRN ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '15px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out', textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: '25px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 20px' }}>
                            <Ctrl.TextField name= { `component.quantity` } sx= {{ minWidth: '70px', maxWidth: '50px' }} register= { register(`component.quantity`) } 
                                type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Quantity" /></Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: '25px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `component.jo_number` } sx= {{ minWidth: '70px', maxWidth: '50px' }} register= { register(`component.jo_number`) } 
                                type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "J.O. Number" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px' }}>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" marginRight= "25px">
                        <Ctrl.Checkbox name= { `component.hnn.chck` } size= "large" checked= { defaultVal !== undefined ? defaultVal.hnn.chck > 0 ? true : isHNN : isHNN }
                            register= { register('component.hnn.chck', {
                                onChange: () => setIsHNN(!isHNN)
                            }) } />
                        <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Hold Notice Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `component.hnn.txt` } sx= {{ minWidth: '70px', maxWidth: '50px' }} register= { register(`component.hnn.txt`) } 
                                variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Ctrl.Checkbox name= { `component.lrn.chck` } size= "large" checked= { defaultVal !== undefined ? defaultVal.lrn.chck > 0 ? true : isLRN : isLRN }
                            register= { register('component.lrn.chck', {
                                onChange: () => setIsLRN(!isLRN)
                            }) } />
                        <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Lacking Report Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `component.lrn.txt` } sx= {{ minWidth: '70px', maxWidth: '50px' }} register= { register(`component.lrn.txt`) } 
                                variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px' }}>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', width: '100%' }}>
                    <Ctrl.TextField name= { `component.remarks` } variant= "standard" fullWidth register= { register(`component.remarks`) } 
                        InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                </Box>
            </Box>
        </Box>
    );
}

export default Remarks;