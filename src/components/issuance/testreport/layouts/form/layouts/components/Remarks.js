// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

const Remarks = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '15px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '10px' }}>
                <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out', textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: '25px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 20px' }}>
                            <Ctrl.TextField name= "comp_quantity" sx= {{ minWidth: '70px', maxWidth: '50px' }} type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Quantity" /></Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexStart: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: '25px' }}>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= "comp_jo_number" sx= {{ minWidth: '70px', maxWidth: '50px' }} type= "number" variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ marginLeft: '10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "J.O. Number" /></Box>
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px' }}>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" marginRight= "25px">
                        <Ctrl.Checkbox name= "comp_hnn_check" size= "large" checked= { false } />
                        <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Hold Notice Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= "comp_hnn_txt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Ctrl.Checkbox name= "remLRNChck" size= "large" checked= { false } />
                        <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Lacking Report Number" /></Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= "remLRNTxt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" InputProps= {{ disableUnderline: true }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px' }}>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', width: '100%' }}>
                    <Ctrl.TextField name= "comRemarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                </Box>
            </Box>
        </Box>
    );
}

export default Remarks;