// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Paint = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.2" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Paint according to specification" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_paint" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Ctrl.Typography text= "c.21" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Color" sx= {{ minWidth: '180px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_paint_color" size= "large" checked= { false } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Ctrl.Typography sx= {{ minWidth: '180px', transition: 'all 0.2s ease-in-out' }} color= "#2c3e50" text= "Gloss" />
                    <Ctrl.Checkbox name= "ci_paint_gloss" size= "large" checked= { false } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Ctrl.Typography sx= {{ minWidth: '180px', transition: 'all 0.2s ease-in-out' }} color= "#2c3e50" text= "Paint Thickness" />
                    <Ctrl.Checkbox name= "ci_paint_thickness" size= "large" checked= { false } />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.22" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Scratches / Dent Marks" sx= {{ minWidth: '180px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "ci_paint_scratch" size= "large" checked= { false } />
            </Box>
        </Box>
    );
}

export default Paint;