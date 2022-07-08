// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const WallMounted = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Checkbox />
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography text= "Wall-Mounted" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '120px' }} /></Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                <Box sx= {{ margin: '0 10px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '120px' }}>
                    <Ctrl.Typography text= "Box" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 30px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "W:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '80px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 30px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "H:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '80px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 30px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "D:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '80px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0' }}>
                <Box sx= {{ margin: '0 10px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '120px' }}>
                    <Ctrl.Typography text= "Cover" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 30px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "W:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '80px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 30px', minWidth: '90px' }}>
                    <Ctrl.Typography text= "L:" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                    <Box sx= {{ borderBottom: 'solid 1px #b2bec3', minWidth: '80px', textAlign: 'center', margin: '0 5px' }}>
                        <Ctrl.Typography text= "-" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, textTransform: 'uppercase' }} />
                    </Box>
                    <Ctrl.Typography text= "mm" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                </Box>
            </Box>
        </Box>
    );
}

export default WallMounted;