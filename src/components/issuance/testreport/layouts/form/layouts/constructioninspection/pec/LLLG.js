// Libraries
import React, { useContext, useState } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const LLLG = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isLLShrinkabletube, setIsLLShrinkabletube ] = useState(false);
    const [ isLLBarrier, setIsLLBarrier ] = useState(false);
    const [ isLGShrinkabletube, setIsLGShrinkabletube ] = useState(false);
    const [ isLGBarrier, setIsLGBarrier ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '400px', margin: '0 25px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'ce', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-L distance" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.busbar.pec.ll.distance` } register= { register(`construction_inspection.busbar.pec.ll.distance`) }
                            sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= { `construction_inspection.busbar.pec.ll.shrinkabletube` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.busbar.pec.ll.shrinkabletube > 0 ? true : isLLShrinkabletube : isLLShrinkabletube }
                        register= { register(`construction_inspection.busbar.pec.ll.shrinkabletube`, {
                            onChange: () => setIsLLShrinkabletube(!isLLShrinkabletube)
                        }) } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= { `construction_inspection.busbar.pec.ll.barrier` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.busbar.pec.ll.barrier > 0 ? true : isLLBarrier : isLLBarrier }
                        register= { register(`construction_inspection.busbar.pec.ll.barrier`, {
                            onChange: () => setIsLLBarrier(!isLLBarrier)
                        }) } />
                    <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '400px', margin: '0 25px'  }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "L-G distance" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.busbar.pec.lg.distance` } register= { register(`construction_inspection.busbar.pec.lg.distance`) }
                            sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= { `construction_inspection.busbar.pec.lg.shrinkabletube` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.busbar.pec.lg.shrinkabletube > 0 ? true : isLGShrinkabletube : isLGShrinkabletube }
                        register= { register(`construction_inspection.busbar.pec.lg.shrinkabletube`, {
                            onChange: () => setIsLGShrinkabletube(!isLGShrinkabletube)
                        }) } />
                    <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Checkbox name= { `construction_inspection.busbar.pec.lg.barrier` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.busbar.pec.lg.barrier > 0 ? true : isLGBarrier : isLGBarrier }
                        register= { register(`construction_inspection.busbar.pec.lg.barrier`, {
                            onChange: () => setIsLGBarrier(!isLGBarrier)
                        }) } />
                    <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default LLLG;