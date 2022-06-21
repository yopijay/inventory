// Libraries
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useFieldArray, useForm } from 'react-hook-form';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

// Layouts
import Forms from './layouts';

const Index = () => {
    const { type } = useParams();
    // eslint-disable-next-line
    const [ isLoad, setIsLoad ] = useState(type !== 'new');
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'components'
    });

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginBottom: '20px' }}>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.charAt(0).toUpperCase() + type.slice(1) : ''} Test Report`} 
                    sx= {{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 'bold', transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap', 
                    marginTop: { xs: '15px', md: 0 } }}  />
            </Box>
            <Box sx= {{ padding: { xs: '0 14px', sm: 0 } }}>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                        <Grid item xs= { 12 }>
                            {
                                !isLoad ? (
                                    <Box sx= {{ width: '100%', marginTop: '20px' }}>
                                        <Forms register= { register } fields= { fields } append= { append } remove= { remove } />
                                        {/* <Form fields= { Fields } register= { register } setValue= { setValue } errors= { errors } getValues= { getValues } disabled= { type === 'view' } /> */}
                                    </Box>
                                ) : (
                                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                                    </Grid>
                                )
                            }
                            <Box width= "100%" marginTop= "30px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                                <Link to= "/issuance/test-report" style= {{ textDecoration: 'none' }}>
                                    <Ctrl.Button color= "error" text= { <Ctrl.Typography color= "#ffffff" text= "Cancel" 
                                                    sx= {{ padding: { xs: '4px 0' }, fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained" />
                                </Link>
                                { type !== 'view' ? (
                                    <Box marginLeft= "10px">
                                        <Ctrl.Button color= "primary" text= {
                                            <Ctrl.Typography color= "#ffffff" text= "Save" 
                                                sx= {{ padding: { xs: '4px 0' }, fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained"
                                                onClick= { /*handleSubmit(data => save(id, data, type, 'category', '/issuance/test-report') )*/handleSubmit(data => console.log(data) ) }/>
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