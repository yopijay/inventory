// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const Drawings = () => {
    const { type } = useParams();
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().component;
    
    const [ isDrawing, setIsDrawing ] = useState(false);
    const [ isSO, setIsSO ] = useState(false);
    const [ isPO, setIsPO ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "b.1" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Device specification conform to final approved drawings" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Ctrl.Checkbox name= "component.draw.drawing" checked= { defaultVal !== undefined ? defaultVal.draw.drawing > 0 ? true : isDrawing : isDrawing }
                register= { register('component.draw.drawing', { onChange: () => setIsDrawing(!isDrawing) }) } size= "large" disabled= { type === 'view' } />
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "S.O." />
                <Ctrl.Checkbox name= "component.draw.so" checked= { defaultVal !== undefined ? defaultVal.draw.so > 0 ? true : isSO : isSO }
                    register= { register('component.draw.so', { onChange: () => setIsSO(!isSO) }) } size= "large" disabled= { type === 'view' } />
            </Box>
            <Box sx= {{ minWidth: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Ctrl.Typography color= "#2c3e50" text= "P.O." />
                <Ctrl.Checkbox name= "component.draw.po" checked= { defaultVal !== undefined ? defaultVal.draw.po > 0 ? true : isPO : isPO }
                    register= { register('component.draw.po', { onChange: () => setIsPO(!isPO) }) } size= "large" disabled= { type === 'view' } />
            </Box>
        </Box>
    );
}

export default Drawings;