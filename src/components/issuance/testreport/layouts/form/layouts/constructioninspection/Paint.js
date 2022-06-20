// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Paint = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.2"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Paint according to specification"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "paint" radius= "5px" size= "large" checked= { false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.21"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Color"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "color" radius= "5px" size= "large" checked= { false } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" margin= "0 20px">
                    <Box><Ctrl.Typography color= "#2c3e50" text= "Gloss" /></Box>
                    <Box>
                        <Ctrl.Checkbox name= "gloss" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Box><Ctrl.Typography color= "#2c3e50" text= "Paint Thickness" /></Box>
                    <Box>
                        <Ctrl.Checkbox name= "thickness" radius= "5px" size= "large" checked= { false } />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 20px' }}>
                <Ctrl.Typography text= "c.21"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Scratches / Dent Marks"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, minWidth: '200px', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= "scratch" radius= "5px" size= "large" checked= { false } />
            </Box>
        </Box>
    );
}

export default Paint;