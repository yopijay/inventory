// Libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const LBS = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().component;

    const [ isP, setIsP ] = useState(false);
    const [ isRating, setIsRating ] = useState(false);
    const [ isFuse, setIsFuse ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.12" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "LBS" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "P" />
                <Ctrl.Checkbox name= "component.lbs.p" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.p > 0 ? true : isP : isP }
                    register= { register('component.lbs.p', {
                        onChange: () => setIsP(!isP)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.lbs.rating" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.rating > 0 ? true : isRating : isRating }
                    register= { register('component.lbs.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography color= "#2c3e50" text= "Fuse" />
                <Ctrl.Checkbox name= "component.lbs.fuse" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.fuse > 0 ? true : isFuse : isFuse }
                    register= { register('component.lbs.fuse', {
                        onChange: () => setIsFuse(!isFuse)
                    }) } />
            </Box>
        </Box>
    );
}

export default LBS;