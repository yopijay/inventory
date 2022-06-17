// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

const GeneralSpecification = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Panel Name" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "panel_name" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Voltage" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "voltage" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Enlosure Type" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "enclosure_type" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Phase / Wire" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "wire" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Color" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "color" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
        </Grid>
    );
}

export default GeneralSpecification;