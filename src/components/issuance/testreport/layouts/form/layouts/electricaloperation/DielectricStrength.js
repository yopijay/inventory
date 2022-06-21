// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Layuots
import DSTable from './tables/DSTable';

const DielectricStrength = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '10px 0' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "e.3"  sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                    <Ctrl.Typography text= "Dielectric Strength Test" sx= {{ minWidth: '200px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "Equipment No.:" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out', textTransform: 'uppercase' }} />
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "eo_ds_equipno" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard"  InputProps= {{ disableUnderline: true }} />
                    </Box>
                </Box>
            </Box>
            <DSTable />
        </Box>
    );
}

export default DielectricStrength;