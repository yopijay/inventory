// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

const b13 = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "b.13 Magnetic Switch" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '23%', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '77%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "AF" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "OLR" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Brand" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default b13;