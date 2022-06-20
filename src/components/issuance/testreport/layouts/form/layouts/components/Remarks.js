// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Remarks = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '15px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '20px' }}>
                <Ctrl.Typography text= "Remarks"
                    sx= {{ paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out', 
                                textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 20px' }}>
                            <Ctrl.TextField name= "remQuantity" sx= {{ minWidth: '70px', maxWidth: '50px' }} type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px' }}><Ctrl.Typography color= "#2c3e50" text= "Quantity" /></Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "remJONumber" sx= {{ minWidth: '70px', maxWidth: '50px' }} type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px' }}><Ctrl.Typography color= "#2c3e50" text= "J.O. Number" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 0' }}>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                        <Box>
                            <Ctrl.Checkbox name= "remHNNChck" radius= "5px" size= "large" checked= { false } />
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Hold Notice Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "remHNNTxt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ paddingLeft: { xs: '15px', md: 0 } }}>
                        <Box>
                            <Ctrl.Checkbox name= "remLRNChck" radius= "5px" size= "large" checked= { false } />
                        </Box>
                        <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "Lacking Report Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "remLRNTxt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px', margin: '10px 15px 0 15px', width: '100%' }}>
                    <Ctrl.TextField name= "comRemarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                </Box>
            </Box>
        </Box>
    );
}

export default Remarks;