// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const C11 = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isMounted, setIsMounted ] = useState(false);
    const [ isLock, setIsLock ] = useState(false);
    const [ isHolder, setIsHolder ] = useState(false);
    const [ isStiffeners, setIsStiffeners ] = useState(false);
    const [ isDeadfront, setIsDeadfront ] = useState(false);
    const [ isCable, setIsCable ] = useState(false);
    const [ isElement, setIsElement ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '10px' }}>
            <Ctrl.Typography text= "c.11" sx= {{ margin: '0 5px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal', paddingLeft: '10px' }} />
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Door latche/hinge properly mounted/welded" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.mounted` }
                            register= { register('construction_inspection.draw.mounted', {
                                onChange: () => setIsMounted(!isMounted)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.mounted > 0 ? true : isMounted : isMounted } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with 3-point locking system" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.lock` }
                            register= { register('construction_inspection.draw.lock', {
                                onChange: () => setIsLock(!isLock)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.lock > 0 ? true : isLock : isLock } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with drawing holder/grouding" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.holder` }
                            register= { register('construction_inspection.draw.holder', {
                                onChange: () => setIsHolder(!isHolder)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.holder > 0 ? true : isHolder : isHolder } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with stiffeners" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.stiffeners` }
                            register= { register('construction_inspection.draw.stiffeners', {
                                onChange: () => setIsStiffeners(!isStiffeners)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.stiffeners > 0 ? true : isStiffeners : isStiffeners } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Deadfront is align/fit" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.deadfront` }
                            register= { register('construction_inspection.draw.deadfront', {
                                onChange: () => setIsDeadfront(!isDeadfront)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.deadfront > 0 ? true : isDeadfront : isDeadfront } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Provided with cable holders" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.cable` }
                            register= { register('construction_inspection.draw.cable', {
                                onChange: () => setIsCable(!isCable)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.cable > 0 ? true : isCable : isCable } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 5px', width: '500px' }}>
                        <Ctrl.Typography text= "Element is align/fit within the enclosure" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.draw.element` }
                            register= { register('construction_inspection.draw.element', {
                                onChange: () => setIsElement(!isElement)
                            }) } size= "large" checked= { defaultVal !== undefined ? defaultVal.draw.element > 0 ? true : isElement : isElement } />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default C11;