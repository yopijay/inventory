// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Constants
import { Torque } from '../../../../../../constants/MechanicalOperation';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const mo = data.mechanical_operation;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
                <Ctrl.Typography text= "d.42 Bolt Tightening Torque" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '30px' }}>
                {
                    Torque().map((row, index) => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }} key= { index }>
                            {
                                (row.item).map((items, index) => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }} key= { index }>
                                        <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.torque[`nm_${items.name}`].chck : false } />
                                        <Ctrl.Typography text= { `~${items.label}` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                                            <Ctrl.Typography text={ `${mo !== undefined ? mo.screw_tightening.torque[`nm_${items.name}`].txt !== '' ? 
                                                                                        mo.screw_tightening.torque[`nm_${items.name}`].txt : '-' : '-' }` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                        </Box>
                                        <Ctrl.Typography text= "N-m" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                    </Box>
                                ))
                            }
                        </Box>
                    ))
                }
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0', paddingLeft: '40px' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '300px' }}>
                    <Ctrl.Typography text= "Other Bolt Sizes" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }}>
                    <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.torque.nm_other1.chck : false } />
                    <Ctrl.Typography text= { `~${mo !== undefined ? mo.screw_tightening.torque.nm_other1.num !== '' ? mo.screw_tightening.torque.nm_other1.num : '' : ''}` } 
                        sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= { `${mo !== undefined ? mo.screw_tightening.torque.nm_other1.txt !== '' ? mo.screw_tightening.torque.nm_other1.txt : '-' : '-'}` } 
                        sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "N-m" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }}>
                    <Ctrl.Checkbox checked= { mo !== undefined ? mo.screw_tightening.torque.nm_other2.chck : false } />
                    <Ctrl.Typography text= { `~${mo !== undefined ? mo.screw_tightening.torque.nm_other2.num !== '' ? mo.screw_tightening.torque.nm_other2.num : '' : ''}` } 
                        sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= { `${mo !== undefined ? mo.screw_tightening.torque.nm_other2.txt !== '' ? mo.screw_tightening.torque.nm_other2.txt : '-' : '-'}` } 
                        sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "N-m" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;