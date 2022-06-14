// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import { Brand } from '../../../../../core/global/validation/Brand';

// Request
import { get, save } from '../../../../../core/request/Request';

// Layouts
import Form from './Form';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

const Index = () => {
    let { type, id } = useParams();
    // eslint-disable-next-line
    const [ values, setValues ] = useState();
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        resolver: yupResolver(Brand())
    });

    useEffect(() => {
        if(id !== undefined) get(id, 'brand', setValue, setValues, setIsLoad);
    }, []);
    
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center">
            <Grid item md= { 12 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px', backgroundColor: '#ffffff' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} BRAND`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                {
                    !isLoad ? (
                        <Box width= "100%" marginTop= "20px">
                            <form autoComplete= "off">
                                <Form register= { register } errors= { errors } getValues= { getValues } disabled= { type === 'view' } />
                            </form>
                        </Box>
                    ) : (
                        <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                            <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                        </Grid>
                    )
                }
                <Box width= "100%" marginTop= "10px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                    <Link to= "/maintenance/brand" style= {{ textDecoration: 'none' }}>
                        <Box padding= "8px 15px 6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                            style= {{ fontSize: '98%' }}>CANCEL</Box>
                    </Link>
                    { type !== 'view' ? (
                        <Box marginLeft= "10px"><Ctrl.Button disableRipple= { true } 
                            sx= {{ fontSize: '98%', textTransform: 'none', padding: '6px 50px', backgroundColor: '#3498db' }} 
                            event= { handleSubmit(data => save(id, data, type, 'brand') ) } text= { <Ctrl.Typography text= "SAVE" color= "#ffffff" /> } /></Box> 
                    ) : '' }
                </Box>
            </Grid>
        </Grid>
    );
}

export default Index;