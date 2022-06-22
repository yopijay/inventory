// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
// import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

const BasicInformation = (props) => {
    const { register, getValues, errors } = props;
    // eslint-disable-next-line
    const defaultVal = getValues().basic_information;
    const error = errors.basic_information;

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Project" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `basic_information.project` } register= { register(`basic_information.project`, { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box marginTop= "5px">
                        <Ctrl.Typography text= { error !== undefined ? error.project !== undefined ? error.project.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Serial No." color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `basic_information.serial_no` } register= { register('basic_information.serial_no', { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box marginTop= "5px">
                        <Ctrl.Typography text= { error !== undefined ? error.serial_no !== undefined ? error.serial_no.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Customer" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 5px' }}>
                        <Ctrl.Select name= { `basic_information.customer_id` } register= { register('basic_information.customer_id', {  }) } 
                            fullWidth variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= ""
                            options= { [] } />
                    </Box>
                    <Box marginTop= "5px">
                        <Ctrl.Typography text= { error !== undefined ? error.customer_id !== undefined ? error.customer_id.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Date Performed" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `basic_information.date_performed` } register= { register('basic_information.date_performed', { required: 'This is required!' }) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box marginTop= "5px">
                        <Ctrl.Typography text= { error !== undefined ? error.date_performed !== undefined ? error.date_performed.message : '' : '' } color= "red" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;