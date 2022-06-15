// Libaries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import { Asset } from '../../../../../core/global/validation/Asset';

// Layouts
import Form from './Form';

// Request
import { get, save } from '../../../../../core/request/Request';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

const Index = () => {
    const { type, id } = useParams();
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        resolver: yupResolver(Asset())
    });
    // eslint-disable-next-line
    const [ values, setValues ] = useState(getValues());

    useEffect(() => {
        if(id !== undefined) get(id, 'assets', setValue, setValues, setIsLoad);
    }, []);
    
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ marginBottom: '20px' }}>
            <Grid item xs= { 12 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px', backgroundColor: '#ffffff' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} ASSET`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                {
                    !isLoad ? (
                        <Box width= "100%" marginTop= "20px">
                            <form autoComplete= "off">
                                <Form register= { register } errors= { errors } getValues= { getValues } setValue= { setValue } disabled= { type === 'view' } />
                            </form>
                        </Box>
                    ) : (
                        <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                            <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                        </Grid>
                    )
                }
                <Box width= "100%" marginTop= "30px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                    <Link to= "/maintenance/assets" style= {{ textDecoration: 'none' }}>
                        <Box padding= "6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                            style= {{ fontSize: '98%' }}>CANCEL</Box>
                    </Link>
                    { type !== 'view' ? (
                        <Box marginLeft= "10px">
                            <Box sx= {{ fontSize: '98%', padding: '6px 50px', color: '#ffffff', backgroundColor: '#3498db', borderRadius: '4px', display: 'flex', 
                                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick= { handleSubmit(data => save(id, data, type, 'assets') ) }>
                                <Ctrl.Typography text= "SAVE" color= "#ffffff" />
                            </Box>
                        </Box>
                    ) : '' }
                </Box>
            </Grid>
        </Grid>
    );
}

export default Index;