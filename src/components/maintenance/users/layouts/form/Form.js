// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

// Request
import { options } from '../../../../../core/request/Request';

// Context
import { FormContext } from '../../../../../core/context/FormContext';

// Constants
import { days } from '../../../../../core/global/constants/Options';

const Form = (props) => {
    const { register, errors, getValues, disabled= false } = props;
    const { isLoad, setIsload, chck, setChck, setDepartmentId, setPositionId, setCivilstatusid, bmonth, bday, byear, civilstatus,
                setBdayid, setBday } = useContext(FormContext);
    const [ departments, setDepartments ] = useState();
    const [ positions, setPositions ] = useState();

    useEffect(() => {
        options('department', ['id', 'name'], setDepartments, setIsload);
        options('position', ['id', 'name'], setPositions, setIsload);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "First name*" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "fname" variant= "standard" fullWidth register= { register('fname', {}) } disabled= { disabled } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.fname === undefined ? '' : errors.fname.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Middle name" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "mname" variant= "standard" fullWidth register= { register('mname', {}) } disabled= { disabled } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.mname === undefined ? '' : errors.mname.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Last name*" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "lname" variant= "standard" fullWidth register= { register('lname', {}) } disabled= { disabled } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.lname === undefined ? '' : errors.lname.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Month" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "bmonth" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().bmonth !== undefined ? getValues().bmonth : new Date().getMonth() + 1 }
                                    register= { register('bmonth', {
                                        onChange: e => setBday(days(parseInt(e.target.value), getValues().byear !== undefined ? getValues().byear : new Date().getFullYear()))
                                    }) } options= { bmonth } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.bmonth === undefined ? '' : errors.bmonth.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Day" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "bday" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().bday !== undefined ? getValues().bday : new Date().getDate() }
                                    register= { register('bday', {
                                        onChange: e => setBdayid(e.target.value)
                                    }) } options= { bday } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.bday === undefined ? '' : errors.bday.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Year" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "byear" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().byear !== undefined ? getValues().byear : new Date().getFullYear() }
                                    register= { register('byear', {
                                        onChange: e => setBday(days(getValues().bmonth !== undefined ? getValues().bmonth : new Date().getMonth() + 1, parseInt(e.target.value)))
                                    }) } options= { byear } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.byear === undefined ? '' : errors.byear.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Address" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "address" variant= "standard" fullWidth register= { register('address', {}) } disabled= { disabled } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.address === undefined ? '' : errors.address.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Civil Status" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "civil_status" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().civil_status !== undefined ? getValues().civil_status : 'single' }
                                    register= { register('civil_status', {
                                        onChange: e => setCivilstatusid(e.target.value)
                                    }) } options= { civilstatus } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.civil_status === undefined ? '' : errors.civil_status.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Department" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "department_id" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().department_id !== undefined ? getValues().department_id !== null ? getValues().department_id : '' : '' }
                                    register= { register('department_id', {
                                        onChange: e => setDepartmentId(e.target.value)
                                    }) } options= { departments !== undefined ? departments : [] } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.department_id === undefined ? '' : errors.department_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 } sm= { 4 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Position" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "position_id" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().position_id !== undefined ? getValues().position_id !== null ? getValues().position_id : '' : '' }
                                    register= { register('position_id', {
                                        onChange: e => setPositionId(e.target.value)
                                    }) } options= { positions !== undefined ? positions : [] } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.position_id === undefined ? '' : errors.position_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Status" color= "#2c3e50" /></Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box>
                            <Ctrl.Checkbox name= "status" disabled= { disabled } checked= { getValues().status !== undefined ? getValues().status > 0 ? true : false : true }
                                register= { register('status', { onChange: () => setChck(!chck) }) } />
                        </Box>
                        <Box><Ctrl.Typography color= "#2c3e50" text= "Active" /></Box>
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.status === undefined ? '' : errors.status.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Form;