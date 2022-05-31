// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';
import Form from '../../../../core/global/Form';
import { Users } from '../../../../core/global/validation/Users';

// Constants
import UsersJson from '../../../../core/global/constants/Users.json';

// Request
import { get, save } from '../../../../core/request/Request';

const Index = (props) => {
    let { type, id } = props;
    const [ values, setValues ] = useState();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(Users())
    });

    useEffect(() => {
        if(id !== undefined) get(id, 'users', setValue, setValues);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center">
            <Grid item md= { 1 } />
            <Grid item md= { 10 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} USER`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                <Box width= "100%" marginTop= "20px">
                    <form autoComplete= "off">
                        <Form json= { UsersJson } register= { register } setValue= { setValue } errors= { errors } setValues= { setValues } values= { values } />
                    </form>
                </Box>
                <Box width= "100%" marginTop= "10px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                    <Link to= "/users" style= {{ textDecoration: 'none' }}>
                        <Box padding= "8px 15px 6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                            style= {{ fontSize: '98%' }}>CANCEL</Box>
                    </Link>
                    { type !== 'view' ? (
                        <Box marginLeft= "10px"><Ctrl.Button disableRipple= { true } 
                        style= {{ fontSize: '120%', textTransform: 'none', fontWeight: 'bolder', padding: '6px 50px', backgroundColor: '#3498db' }} 
                        event= { handleSubmit(data => save(id, data, type, 'users') ) } text= { <Ctrl.Typography text= "SAVE" color= "#ffffff" /> } /></Box> 
                    ) : '' }
                </Box>
            </Grid>
        </Grid>
    );
}

export default Index;