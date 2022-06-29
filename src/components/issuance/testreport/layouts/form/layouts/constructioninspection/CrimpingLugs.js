// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../core/context/TestReportContext';

const CrimpingLugs = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isLineBus, setIsLineBus ] = useState(false);
    const [ isOutgoing, setIsOutgoing ] = useState(false);
    const [ isGrounding, setIsGrounding ] = useState(false);
    const [ isNeutral, setIsNeutral ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', padding: '0 10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.32" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Correct quantity of terminal / Crimping lugs:" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" width= "200px">
                    <Ctrl.Typography color= "#2c3e50" text= "Incoming / Line Bus" />
                    <Ctrl.Checkbox name= { `construction_inspection.crimp.linebus` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.crimp.linebus > 0 ? true : isLineBus : isLineBus }
                        register= { register(`construction_inspection.crimp.linebus`, {
                            onChange: () => setIsLineBus(!isLineBus)
                        }) } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" width= "200px">
                    <Ctrl.Typography color= "#2c3e50" text= "Outgoing" />
                    <Ctrl.Checkbox name= { `construction_inspection.crimp.outgoing` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.crimp.outgoing > 0 ? true : isOutgoing : isOutgoing }
                        register= { register(`construction_inspection.crimp.outgoing`, {
                            onChange: () => setIsOutgoing(!isOutgoing)
                        }) } />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" width= "200px">
                    <Ctrl.Typography color= "#2c3e50" text= "Grounding" />
                    <Ctrl.Checkbox name= { `construction_inspection.crimp.grounding` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.crimp.grounding > 0 ? true : isGrounding : isGrounding }
                        register= { register(`construction_inspection.crimp.grounding`, {
                            onChange: () => setIsGrounding(!isGrounding)
                        }) } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center" width= "200px">
                    <Ctrl.Typography color= "#2c3e50" text= "Neutral" />
                    <Ctrl.Checkbox name= { `construction_inspection.crimp.neutral` } size= "large" 
                        checked= { defaultVal !== undefined ? defaultVal.crimp.neutral > 0 ? true : isNeutral : isNeutral }
                        register= { register(`construction_inspection.crimp.neutral`, {
                            onChange: () => setIsNeutral(!isNeutral)
                        }) } />
                </Box>
            </Box>
        </Box>
    );
}

export default CrimpingLugs;