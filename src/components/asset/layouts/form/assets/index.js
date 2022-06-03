// Libaries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import { Asset } from '../../../../../core/global/validation/Asset';

// Constants

// Request
import { get, optionsPer, save } from '../../../../../core/request/Request';
import { getDefaultValue } from '../../../../../core/global/Function';

const Index = (props) => {
    let { type, id } = props;
    // eslint-disable-next-line
    const [ values, setValues ] = useState();
    const [ brand, setBrand ] = useState();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        resolver: yupResolver(Asset())
    });

    useEffect(() => {
        if(id !== undefined) get(id, 'assets', setValue, setValues);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center">
            <Grid item md= { 1 } />
            <Grid item md= { 6 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} ASSET`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                <Box width= "100%" marginTop= "20px">
                    <form autoComplete= "off">
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                            <Grid item xs= { 12 }>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box marginBottom= "5px"><Ctrl.Typography text= "*Category" className= "f-15" /></Box>
                                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                                        <Ctrl.Select name= "category_id" size= "small" padding= "12px 15px 8px 15px"
                                            value= { getValues().category_id !== undefined ? getValues().category_id : "1" }
                                            register= { register('category_id', {
                                                onChange: async (e) => setBrand(await optionsPer('category', ['id', 'name'], e.target.value))
                                            }) } options= { async() => (await getDefaultValue('category_id', 'category_id')).options } />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs= { 12 }>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box marginBottom= "5px"><Ctrl.Typography text= "*Brand" className= "f-15" /></Box>
                                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                                        { console.log(brand) }
                                        <Ctrl.Select name= "brand_id" size= "small" padding= "12px 15px 8px 15px"
                                            value= { getValues().brand_id !== undefined ? getValues().brand_id : "1" }
                                            register= { register('brand_id', {
                                                onChange: async (e) => console.log(e.target.value)
                                            }) } options= { async () => brand !== undefined ? await brand : await [] } />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
                <Box width= "100%" marginTop= "10px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                    <Link to= "/assets" style= {{ textDecoration: 'none' }}>
                        <Box padding= "8px 15px 6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                            style= {{ fontSize: '98%' }}>CANCEL</Box>
                    </Link>
                    { type !== 'view' ? (
                        <Box marginLeft= "10px"><Ctrl.Button disableRipple= { true } 
                        style= {{ fontSize: '120%', textTransform: 'none', fontWeight: 'bolder', padding: '6px 50px', backgroundColor: '#3498db' }} 
                        event= { handleSubmit(data => save(id, data, type, 'assets') ) } text= { <Ctrl.Typography text= "SAVE" color= "#ffffff" /> } /></Box> 
                    ) : '' }
                </Box>
            </Grid>
        </Grid>
    );
}

export default Index;