// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

const BasicInformation = () => {
    // eslint-disable-next-line
    const { type, id } = useParams();

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ marginTop: '25px' }} spacing= { 1 }>
            <Grid item xs= { 12 }>
                <Ctrl.Typography text= "Basic Information" sx= {{ textTransform: 'uppercase', color: '#2c3e50', fontWeight: 'bold', fontSize: '115%', borderBottom: 'solid 1px #dfe6e9',
                    paddingBottom: '10px', marginBottom: '20px' }} />
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Project" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "description" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" 
                        disabled= { false } /*register= { register('description', {}) }*/ />
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Serial No." className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "description" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" 
                        disabled= { true } /*register= { register('description', {}) }*/ />
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Customer" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "description" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" 
                        disabled= { false } /*register= { register('description', {}) }*/ />
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Date Performed" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "description" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" 
                        disabled= { true } /*register= { register('description', {}) }*/ />
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box width= "100%" marginTop= "30px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                    <Link to= "/maintenance/test-report/form/new" style= {{ textDecoration: 'none' }}>
                        <Box padding= "6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                            style= {{ fontSize: '98%' }}>CANCEL</Box>
                    </Link>
                    { type !== 'view' ? (
                        <Box marginLeft= "10px">
                            <Box sx= {{ fontSize: '98%', padding: '6px 50px', color: '#ffffff', backgroundColor: '#3498db', borderRadius: '4px', display: 'flex', 
                                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <Ctrl.Typography text= "SAVE" color= "#ffffff" />
                            </Box>
                        </Box>
                    ) : '' }
                </Box>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;