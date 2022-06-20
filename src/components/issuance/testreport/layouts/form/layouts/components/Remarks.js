// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Remarks = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, marginTop: '15px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ctrl.Typography text= "Remarks"
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '8px 5px 0 0', transition: 'all 0.2s ease-in-out', 
                                textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirectio: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "remQuantity" type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box sx= {{ marginLeft: '10px' }}><Ctrl.Typography color= "#2c3e50" text= "Quantity" /></Box>
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "remJONumber" variant= "standard" InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box sx= {{ marginLeft: '10px' }}><Ctrl.Typography color= "#2c3e50" text= "J.O. Number" /></Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirectio: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '10px' }}>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                    <Box>
                        <Ctrl.Checkbox name= "remHNNChck" radius= "5px" padding= "12px 15px 8px 15px" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Hold Notice Number" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "remHNNTxt" variant= "standard" InputProps= {{ disableUnderline: true }} />
                    </Box>
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                    <Box>
                        <Ctrl.Checkbox name= "remLRNChck" radius= "5px" padding= "12px 15px 8px 15px" size= "large" checked= { false } />
                    </Box>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Lacking Report Number" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "remLRNTxt" variant= "standard" InputProps= {{ disableUnderline: true }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', marginTop: '10px' }}>
                <Ctrl.TextField name= "remarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
            </Box>
        </Box>
    );
}

export default Remarks;