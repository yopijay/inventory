// Libraries
import React, { useContext } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../controls/Controls';

// Context
import { DialogContext } from '../../../../../../../context/DialogContext';

const Index = () => {
    const { data } = useContext(DialogContext);
    const ci = data.construction_inspection;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.2 Paint according to specification" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, width: '300px' }} />
                <Ctrl.Checkbox checked= { ci !== undefined ? ci.paint.paint : false } />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.21" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '5%', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '95%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Color" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.paint.color : false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Gloss" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.paint.gloss : false } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Paint Thickness" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.paint.thickness : false } />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "c.22" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' }, minWidth: '5%', paddingLeft: '20px' }} />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', minWidth: '95%' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: '0 10px', minWidth: '90px' }}>
                        <Ctrl.Typography text= "Scrathes / Dent marks" sx= {{ fontSize: { xs: '95%', sm: '100%', md: '110%' } }} />
                        <Ctrl.Checkbox checked= { ci !== undefined ? ci.paint.scratch : false } />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;