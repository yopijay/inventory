// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';
import { getDate } from '../../../../../../core/global/Function';
import { get, options } from '../../../../../../core/request/Request';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

// Loader
import { SnakeLoader } from '../../../../../../core/loader/Loader';

const BasicInformation = () => {
    const { type, id } = useParams();
    const { register, getValues, errors, setValue } = useContext(TestReportContext);
    const defaultVal = getValues().basic_information;
    const error = errors.basic_information;
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const [ loadDropdown, setLoaddropdown ] = useState(true);
    const [ isToday, setIsToday ] = useState();
    // eslint-disable-next-line
    const [ customerId, setCustomerId ] = useState();
    const [ customer, setCustomer ] = useState();

    const updateTime = () => {
        setIsToday(getDate(new Date()).date);
    }

    useEffect(() => {
        options('customer', ['id', 'name'], setCustomer, setLoaddropdown);
        setInterval(updateTime, 1000);
        if(id !== undefined) get(id, 'basic_information', setValue, setIsLoad, 'basic_information');
    }, []);

    return (
        <Box>
            {
                !isLoad ? (
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Project" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `basic_information.project` } register= { register(`basic_information.project`) } 
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
                                    <Ctrl.TextField name= { `basic_information.serial_no` } register= { register('basic_information.serial_no') } 
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
                                    {
                                        !loadDropdown ? (
                                            <Ctrl.Select name= { `basic_information.customer_id` } register= { register('basic_information.customer_id', {
                                                    onChange: e => setCustomerId(e.target.value)
                                                }) } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }} value= { defaultVal.customer_id !== undefined ? defaultVal.customer_id : '' }
                                                options= { customer } />
                                        ) : (
                                            <Skeleton variant= "rectangular" width= "100%" height= "30px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                                        )
                                    }
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
                                    {
                                        isToday !== undefined ? (
                                            <Ctrl.TextField name= { `basic_information.date_performed` } register= { register('basic_information.date_performed', {
                                                    onChange: e => setIsToday(e.target.value)
                                                }) } variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} type= "datetime-local" disabled= { type !== 'new' }
                                                value= { type !== 'new' ? getDate(new Date(getValues().basic_information.date_performed)).date : isToday } />
                                        ) : ( <Skeleton variant= "rectangular" width= "100%" height= "30px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} /> )
                                    }
                                </Box>
                                <Box marginTop= "5px">
                                    <Ctrl.Typography text= { error !== undefined ? error.date_performed !== undefined ? error.date_performed.message : '' : '' } color= "red" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default BasicInformation;