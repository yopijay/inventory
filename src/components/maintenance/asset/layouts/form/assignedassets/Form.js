// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Request
import { options, optionsPer } from '../../../../../../core/request/Request';

const Form = (props) => {
    const { register, errors, getValues } = props;
    const [ categories, setCategories ] = useState();
    const [ brands, setBrands ] = useState();
    const [ assets, setAssets ] = useState();
    const [ users, setUsers ] = useState();

    useEffect(() => {
        options('category', ['id', 'name'], setCategories);
        options('users', ['id', "CONCAT(lname, ', ', fname, ' ', mname) as name"], setUsers);
        optionsPer('brand', ['id', 'name'], setBrands, getValues().category_id);
        optionsPer('assets', ['id', 'name'], setAssets, getValues().brand_id);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Category" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "category_id" size= "small" padding= "12px 15px 8px 15px" 
                            defaultValue= "1"
                            register= { register('category_id', {
                                onChange: e => optionsPer('brand', ['id', 'name'], setBrands, e.target.value)
                            }) } options= { categories !== undefined ? categories : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.category_id === undefined ? '' : errors.category_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Brand" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "brand_id" size= "small" padding= "12px 15px 8px 15px" 
                            defaultValue= ""
                            register= { register('brand_id', {
                                onChange: e => optionsPer('assets', ['id', 'name'], setAssets, e.target.value)
                            }) } options= { brands !== undefined ? brands : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.brand_id === undefined ? '' : errors.brand_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Asset" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "asset_id" size= "small" padding= "12px 15px 8px 15px" 
                            defaultValue= ""
                            register= { register('asset_id', {}) } options= { assets !== undefined ? assets : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.asset_id === undefined ? '' : errors.asset_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "User" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "user_id" size= "small" padding= "12px 15px 8px 15px" 
                            defaultValue= ""
                            register= { register('user_id', {}) } options= { users !== undefined ? users : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.user_id === undefined ? '' : errors.user_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Quantity" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "quantity" type= "number" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" register= { register('quantity', {}) } />
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.quantity === undefined ? '' : errors.quantity.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Status" className= "f-15" color= "#2c3e50" /></Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box>
                            <Ctrl.Checkbox name= "status" radius= "5px" padding= "12px 15px 8px 15px" size= "small"
                                defaultChecked= { true }
                                register= { register('status', {}) } />
                        </Box>
                        <Box><Ctrl.Typography className= "f-15" text= "Active" /></Box>
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