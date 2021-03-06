// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const Paint = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isPaint, setIsPaint ] = useState(false);
    const [ isColor, setIsColor ] = useState(false);
    const [ isGloss, setIsGloss ] = useState(false);
    const [ isThickness, setIsThickness ] = useState(false);
    const [ isScratch, setIsScratch ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Ctrl.Typography text= "c.2" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Paint according to specification" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.paint.paint` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.paint.paint > 0 ? true : isPaint : isPaint }
                    register= { register(`construction_inspection.paint.paint`, {
                        onChange: () => setIsPaint(!isPaint)
                    }) } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Ctrl.Typography text= "c.21" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Color" sx= {{ width: '120px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.paint.color` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.paint.color > 0 ? true : isColor : isColor }
                    register= { register(`construction_inspection.paint.color`, {
                        onChange: () => setIsColor(!isColor)
                    }) } />
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" margin= "0 20px" width= "150px">
                    <Ctrl.Typography sx= {{ transition: 'all 0.2s ease-in-out' }} color= "#2c3e50" text= "Gloss" />
                    <Ctrl.Checkbox name= { `construction_inspection.paint.gloss` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.paint.gloss > 0 ? true : isGloss : isGloss }
                    register= { register(`construction_inspection.paint.gloss`, {
                        onChange: () => setIsGloss(!isGloss)
                    }) } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center">
                    <Ctrl.Typography sx= {{ width: '120px', transition: 'all 0.2s ease-in-out' }} color= "#2c3e50" text= "Paint Thickness" />
                    <Ctrl.Checkbox name= { `construction_inspection.paint.thickness` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.paint.thickness > 0 ? true : isThickness : isThickness }
                    register= { register(`construction_inspection.paint.thickness`, {
                        onChange: () => setIsThickness(!isThickness)
                    }) } />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, padding: '0 10px' }}>
                <Ctrl.Typography text= "c.22" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Scratches / Dent Marks" sx= {{ width: '180px', transition: 'all 0.2s ease-in-out' }} />
                <Ctrl.Checkbox name= { `construction_inspection.paint.scratch` } size= "large" 
                    checked= { defaultVal !== undefined ? defaultVal.paint.scratch > 0 ? true : isScratch : isScratch }
                    register= { register(`construction_inspection.paint.scratch`, {
                        onChange: () => setIsScratch(!isScratch)
                    }) } />
            </Box>
        </Box>
    );
}

export default Paint;