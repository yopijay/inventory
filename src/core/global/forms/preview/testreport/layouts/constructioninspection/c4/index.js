// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Constants
import { PowerCable } from '../../../../../../constants/ConstructionInspection';

const Index = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c4. Power cable ampacity conform to PEC" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '300px' }} />
                <Ctrl.Checkbox />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '20px' }}>
                {
                    PowerCable().map(index => (
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
                                        <Ctrl.Typography text= "mm²" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
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

export default Index;