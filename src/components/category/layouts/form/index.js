// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';
import Form from '../../../../core/global/Form';
import { Category } from '../../../../core/global/validation/Category';

// Constants
import { Category as Fields } from '../../../../core/global/constants/Category';

// Request
import { get, save } from '../../../../core/request/Request';

const Index = () => {
    const { type, id } = useParams();
    // eslint-disable-next-line
    const [ values, setValues ] = useState();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        resolver: yupResolver(Category())
    });
    
    useEffect(() => {
        if(id !== undefined) get(id, 'category', setValue, setValues);
    }, []);
    
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center">
            <Grid item xs= { 12 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px', backgroundColor: '#ffffff' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} CATEGORY`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Grid item>
                        <Box sx= {{ marginTop: '20px' }}>
                            <form autoComplete= "off">
                                <Form fields= { Fields } register= { register } setValue= { setValue } errors= { errors } getValues= { getValues } />
                            </form>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box marginTop= "10px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                            <Link to= "/maintenance/category" style= {{ textDecoration: 'none' }}>
                                <Box padding= "8px 15px 6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                                    style= {{ fontSize: '98%' }}>CANCEL</Box>
                            </Link>
                            { type !== 'view' ? (
                                <Box marginLeft= "10px"><Ctrl.Button disableRipple= { true } 
                                    sx= {{ fontSize: '98%', textTransform: 'none', padding: '6px 50px', backgroundColor: '#3498db' }} 
                                    event= { handleSubmit(data => save(id, data, type, 'category') ) } text= { <Ctrl.Typography text= "SAVE" color= "#ffffff" /> } /></Box> 
                            ) : '' }
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Index;