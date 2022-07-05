// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../controls/Controls';

// Layout
import List from '../../../list';

const Index = (props) => {
    const { name, data } = props;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ marginBottom: '20px' }}>
                <Ctrl.Typography text= { `${name.replaceAll('_', ' ').charAt(0).toUpperCase()}${name.replaceAll('_', ' ').slice(1)} Report` } 
                    sx= {{ fontSize: { xs: '100%', sm: '105%', md: '120%' }, fontWeight: 'bold' }} />
            </Box>
            <Box><List data= { data } /></Box>
        </Box>
    );
}

export default Index;