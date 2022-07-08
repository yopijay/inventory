// Libraries
import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';

// Core
import Ctrl from '../../../controls/Controls';

// Context
import { DialogContext } from '../../../../context/DialogContext';

// Layouts
import BasicInformation from './layouts/BasicInformation';
import GeneralSpecification from './layouts/GeneralSpecification';
import Component from './layouts/Component';
import ConstructionInspection from './layouts/ConstructionInspection';
import MechanicalOperation from './layouts/MechanicalOperation';
import ElectricalOperation from './layouts/ElectricalOperation';
import Signature from './layouts/Signature';

const Index = (props) => {
    const { name } = props;
    const { id } = useContext(DialogContext);
    
    useEffect(() => {
        console.log();
    }, []);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ marginBottom: '10px' }}>
                <Ctrl.Typography text= { `${name.replaceAll('_', ' ').charAt(0).toUpperCase()}${name.replaceAll('_', ' ').slice(1)}` } 
                    sx= {{ fontSize: { xs: '100%', sm: '105%', md: '120%' }, fontWeight: 'bold', textTransform: 'uppercase' }} />
            </Box>
            <BasicInformation />
            <GeneralSpecification />
            <Component />
            <ConstructionInspection />
            <MechanicalOperation />
            <ElectricalOperation />
            <Signature />
        </Box>
    );
}

export default Index;