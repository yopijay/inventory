// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const LVPT = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "LV PT" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.lv_pt.type" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_pt.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.lv_pt.type', {
                        onChange: () => setIsType(!isType)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.lv_pt.rating" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_pt.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.lv_pt.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.lv_pt.brand" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_pt.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.lv_pt.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
        </Box>
    );
}

export default LVPT;