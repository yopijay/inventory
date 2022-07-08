// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Layouts
import C31 from './c31';
import C32 from './c32';
import C33 from './c33';
import C34 from './c34';
import C35 from './c35';

// Constants
import { Busbar } from '../../../../../../constants/ConstructionInspection';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.3 Busbar ampacity complies with Manufacturer`s standard on current density" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '500px' }} />
                <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.busbar : false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '20px' }}>
                {
                    Busbar().map(index => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }} key= { index }>
                            {
                                index.map(index => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }} key= { index }>
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: 'solid 1px #b2bec3', 
                                                            borderRadius: '5px', width: '30px', height: '30px' }}>
                                            <Ctrl.Typography text= { `${ci !== undefined ? ci.busbar.options[`mm_${index}`].num !== '' ? 
                                                                                        ci.busbar.options[`mm_${index}`].num : '-' : '-' }` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                        </Box>
                                        <Ctrl.Typography text= { `~${index}` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                                            <Ctrl.Typography text= { `${ci !== undefined ? ci.busbar.options[`mm_${index}`].txt !== '' ? 
                                                                                        ci.busbar.options[`mm_${index}`].txt : '-' : '-' }` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                                        </Box>
                                        <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                    </Box>
                                ))
                            }
                        </Box>
                    ))
                }
            </Box>
            <C31 />
            <C32 />
            <C33 />
            <C34 />
            <C35 />
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '30px', width: '100%' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '45%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "L-L distance" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                            <Ctrl.Typography text= { ci !== undefined ? ci.busbar.pec.ll.distance  !== '' ? ci.busbar.pec.ll.distance : '-' : '-' } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        </Box>
                        <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.pec.ll.shrinkabletube : false } />
                        <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.pec.ll.barrier : false } />
                        <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', width: '45%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "L-G distance" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                            <Ctrl.Typography text= { ci !== undefined ? ci.busbar.pec.lg.distance  !== '' ? ci.busbar.pec.lg.distance : '-' : '-' } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        </Box>
                        <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.pec.lg.shrinkabletube : false } />
                        <Ctrl.Typography text= "Provided w/ shrinkable tube" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.busbar.pec.lg.barrier : false } />
                        <Ctrl.Typography text= "Provided w/ barrier" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;