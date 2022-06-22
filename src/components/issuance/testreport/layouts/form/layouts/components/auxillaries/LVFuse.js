// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const LVFuse = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().component;

    const [ isType, setIsType ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isBrand, setIsBrand ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "LV Fuse" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Type" />
                <Ctrl.Checkbox name= "component.auxillary.lv_fuse.type" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_fuse.type > 0 ? true : isType : isType }
                    register= { register('component.auxillary.lv_fuse.type', {
                        onChange: () => setIsType(!isType)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.auxillary.lv_fuse.rating" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_fuse.rating > 0 ? true : isRating : isRating }
                    register= { register('component.auxillary.lv_fuse.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Brand" />
                <Ctrl.Checkbox name= "component.auxillary.lv_fuse.brand" size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.auxillary.lv_fuse.brand > 0 ? true : isBrand : isBrand }
                    register= { register('component.auxillary.lv_fuse.brand', {
                        onChange: () => setIsBrand(!isBrand)
                    }) } />
            </Box>
        </Box>
    );
}

export default LVFuse;