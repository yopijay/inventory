// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../../context/DialogContext';

const Meter = () => {
    const { data } = useContext(DialogContext);
    const c = data.component;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'  }}>
                <Ctrl.Typography text= "Meters" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '150px', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '75px' }}>
                        <Ctrl.Typography text= "Type" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.auxillary.meter.type : false } disabled />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '75px' }}>
                        <Ctrl.Typography text= "Rating" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.auxillary.meter.rating : false } disabled />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '75px' }}>
                        <Ctrl.Typography text= "Brand" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.auxillary.meter.brand : false } disabled />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '75px' }}>
                        <Ctrl.Typography text= "Scale" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { c !== undefined ? c.auxillary.meter.scale : false } disabled />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Meter;