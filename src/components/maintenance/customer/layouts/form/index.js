// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import Form from '../../../../../core/global/Form';
import { Customer } from '../../../../../core/global/validation/Customer';

// Constants
import { Customer as Fields } from '../../../../../core/global/constants/Customer';

// Request
import { get, save } from '../../../../../core/request/Request';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

const Index = () => {
    const { type, id } = useParams();
    // eslint-disable-next-line
    const [ values, setValues ] = useState();
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const { register, handleSubmit, formState: { errors }, setValue, getValues, setError } = useForm({
        resolver: yupResolver(Customer())
    });
    
    useEffect(() => {
        if(id !== undefined) get(id, 'customer', setValue, setValues, setIsLoad);
    }, []);
    
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginBottom: '20px' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.charAt(0).toUpperCase() + type.slice(1) : ''} Customer`} 
                    sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap', 
                    marginTop: { xs: '15px', md: 0 } }}  />
            </Box>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                    <Grid item xs= { 12 }>
                        {
                            !isLoad ? (
                                <Box sx= {{ width: '100%', marginTop: '20px' }}>
                                    <form autoComplete= "off">
                                        <Form fields= { Fields } register= { register } setValue= { setValue } errors= { errors } getValues= { getValues } disabled= { type === 'view' } />
                                    </form>
                                </Box>
                            ) : (
                                <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                                    <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                                </Grid>
                            )
                        }
                        <Box width= "100%" marginTop= "30px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                            <Link to= "/maintenance/customer" style= {{ textDecoration: 'none' }}>
                                <Ctrl.Button color= "error" text= {
                                            <Ctrl.Typography color= "#ffffff" text= "Cancel" 
                                                sx= {{ padding: { xs: '4px 0' },
                                                            fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained" />
                            </Link>
                            { type !== 'view' ? (
                                <Box marginLeft= "10px">
                                    <Ctrl.Button color= "primary" text= {
                                        <Ctrl.Typography color= "#ffffff" text= "Save" 
                                            sx= {{ padding: { xs: '4px 0' },
                                                        fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained"
                                        onClick= { handleSubmit(data => save(id, data, type, 'customer', '/maintenance/customer', setError) ) }/>
                                </Box>
                            ) : '' }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Index;