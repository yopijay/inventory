// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const ExhaustFan = () => {
    const { type } = useParams();
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Exhaust Fan" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.exhaust_fan.type" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.exhaust_fan.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.exhaust_fan.type', {
                        onChange: () => setIsType(!isType)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.exhaust_fan.rating" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.exhaust_fan.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.exhaust_fan.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.exhaust_fan.brand" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.exhaust_fan.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.exhaust_fan.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default ExhaustFan;