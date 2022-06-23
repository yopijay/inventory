// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const LightningArrester = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Lightning Arrester" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.lightning_arrester.type" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lightning_arrester.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.lightning_arrester.type', {
                        onChange: () => setIsType(!isType)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.lightning_arrester.rating" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lightning_arrester.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.lightning_arrester.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.lightning_arrester.brand" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lightning_arrester.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.lightning_arrester.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
        </Box>
    );
}

export default LightningArrester;