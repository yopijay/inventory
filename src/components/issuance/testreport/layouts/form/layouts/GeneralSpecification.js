// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

const GeneralSpecification = (props) => {
    const { register, getValues, errors } = props;
    // eslint-disable-next-line
    const defaultVal = getValues().general_specification;
    const error = errors.general_specification;

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Panel Name" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `general_specification.panel_name` } register= { register(`general_specification.panel_name`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.panel_name !== undefined ? error.panel_name.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Voltage" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `general_specification.voltage` } register= { register(`general_specification.voltage`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.voltage !== undefined ? error.voltage.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Enlosure Type" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `general_specification.enclosure_type` } register= { register(`general_specification.enclosure_type`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.enclosure_type !== undefined ? error.enclosure_type.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Phase / Wire" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `general_specification.wire` } register= { register(`general_specification.wire`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.wire !== undefined ? error.wire.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Color" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `general_specification.color` } register= { register(`general_specification.color`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.color !== undefined ? error.color.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default GeneralSpecification;