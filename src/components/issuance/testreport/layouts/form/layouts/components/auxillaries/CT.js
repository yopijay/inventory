// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const CT = () => {
    const { type } = useParams();
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "CT" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.ct.type" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.ct.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.ct.type', {
                        onChange: () => setIsType(!isType)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.ct.rating" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.ct.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.ct.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.ct.brand" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.ct.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.ct.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default CT;