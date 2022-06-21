// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
// import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

const BasicInformation = () => {
    // eslint-disable-next-line
    // const { id } = useParams();
    // const [ isLoad, setIsLoad ] = useState(true);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Project" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "project" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Serial No." color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "serial_no" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Customer" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 5px' }}>
                        <Ctrl.Select name= "customer_id" fullWidth variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= ""
                            options= { [] } />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.category_id === undefined ? '' : errors.category_id.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Date Performed" color= "text-primary" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= "date_performed" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                    </Box>
                    {/* <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box> */}
                </Box>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;