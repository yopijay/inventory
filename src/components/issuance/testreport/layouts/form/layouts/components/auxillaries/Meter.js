// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const Meter = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);
    const [ isScale, setIsScale ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Meters" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.meter.type" size= "large" checked= { defaultVal !== undefined ? defaultVal.auxillary.meter.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.meter.type', {
                        onChange: () => setIsType(!isType)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.meter.rating" size= "large" checked= { defaultVal !== undefined ? defaultVal.auxillary.meter.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.meter.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.meter.brand" size= "large" checked= { defaultVal !== undefined ? defaultVal.auxillary.meter.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.meter.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Scale" />
                <Ctrl.Checkbox name= "component.auxillary.meter.scale" size= "large" checked= { defaultVal !== undefined ? defaultVal.auxillary.meter.scale > 0 ? true : isScale : isScale }
                    register= { register('component.auxillary.meter.scale', {
                        onChange: () => setIsScale(!isScale)
                    }) } />
            </Box>
        </Box>
    );
}

export default Meter;