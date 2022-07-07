// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Constants
import { Torque } from '../../../../../../constants/MechanicalOperation';

const Index = () => {
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
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: 'solid 1px #b2bec3', 
                                                            borderRadius: '5px', width: '30px', height: '30px' }}>
                                            <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                        </Box>
                                        <Ctrl.Typography text= { `~${items.label}` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                                            <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
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
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: 'solid 1px #b2bec3', 
                                        borderRadius: '5px', width: '30px', height: '30px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Ctrl.Typography text= "~" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "N-m" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: 'solid 1px #b2bec3', 
                                        borderRadius: '5px', width: '30px', height: '30px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    </Box>
                    <Ctrl.Typography text= "~" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "N-m" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;