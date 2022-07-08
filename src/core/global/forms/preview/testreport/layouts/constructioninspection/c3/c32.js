// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Constants
import { MCM } from '../../../../../../constants/ConstructionInspection';

const c32 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '50%', paddingLeft: '20px' }}>
                    <Ctrl.Typography text= "c.32" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Ctrl.Typography text= "Correct quantity of terminal/crimping lugs:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', marginLeft: '15px' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', minWidth: '45%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                            <Ctrl.Typography text= "Incoming / Line bus" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                            <Ctrl.Checkbox />
                        </Box>
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                            <Ctrl.Typography text= "Outgoing" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                            <Ctrl.Checkbox />
                        </Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                            <Ctrl.Typography text= "Grounding" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                            <Ctrl.Checkbox />
                        </Box>
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                            <Ctrl.Typography text= "Neutral" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                            <Ctrl.Checkbox />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '20px', marginTop: '20px' }}>
                {
                    MCM().map(index => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }} key= { index }>
                            {
                                index.map(index => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '200px' }} key= { index }>
                                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: 'solid 1px #b2bec3', 
                                                            borderRadius: '5px', width: '30px', height: '30px' }}>
                                            <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                        </Box>
                                        <Ctrl.Typography text= { `~${index}` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%', width: '50px' } }} />
                                        <Box sx= {{ borderBottom: 'solid 1px #b2bec3', width: '50px', textAlign: 'center', margin: '0 5px' }}>
                                            <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                                        </Box>
                                        <Ctrl.Typography text= { `mm` } sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                                    </Box>
                                ))
                            }
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default c32;