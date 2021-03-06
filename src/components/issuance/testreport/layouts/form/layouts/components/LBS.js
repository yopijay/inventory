// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const LBS = () => {
    const { type } = useParams();
    const { register, getValues } = useContext(TestReportContext);
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
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "P" />
                <Ctrl.Checkbox name= "component.lbs.p" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.p > 0 ? true : isP : isP }
                    register= { register('component.lbs.p', {
                        onChange: () => setIsP(!isP)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Rating" />
                <Ctrl.Checkbox name= "component.lbs.rating" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.rating > 0 ? true : isRating : isRating }
                    register= { register('component.lbs.rating', {
                        onChange: () => setIsRating(!isRating)
                    }) } disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "Fuse" />
                <Ctrl.Checkbox name= "component.lbs.fuse" size= "large" checked= { defaultVal !== undefined ? defaultVal.lbs.fuse > 0 ? true : isFuse : isFuse }
                    register= { register('component.lbs.fuse', {
                        onChange: () => setIsFuse(!isFuse)
                    }) } disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default LBS;