// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

// Request
import { options, optionsPer } from '../../../../../core/request/Request';

const Form = (props) => {
    const { register, errors, getValues, setValue } = props;
    const [ categories, setCategories ] = useState();
    const [ brands, setBrands ] = useState();
    const [ assets, setAssets ] = useState();
    const [ users, setUsers ] = useState();
    // eslint-disable-next-line
    const [ asst, setAsst ] = useState();
    // eslint-disable-next-line
    const [ usr, setUsr ] = useState();
    const [ categoryLoader, setCategoryLoader ] = useState(true);
    const [ usersLoader, setUsersLoader ] = useState(true);
    const [ brandLoader, setBrandLoader ] = useState(true);
    const [ assetLoader, setAssetLoader ] = useState(true);

    useEffect(() => {
        options('category', ['id', 'name'], setCategories, setCategoryLoader);
        options('users', ['id', "CONCAT(lname, ', ', fname, ' ', mname) as name"], setUsers, setUsersLoader);
        optionsPer('brand', ['id', 'name'], setBrands, getValues().category_id !== undefined ? getValues().category_id : '1', setBrandLoader);
        optionsPer('assets', ['id', 'name'], setAssets, getValues().brand_id, setAssetLoader);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Category" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        {
                            !categoryLoader ? (
                                <Ctrl.Select name= "category_id" size= "small" padding= "12px 15px 8px 15px" 
                                    value= { getValues().category_id !== undefined ? getValues().category_id : '1' }
                                    register= { register('category_id', {
                                        onChange: e => { optionsPer('brand', ['id', 'name'], setBrands, e.target.value, setBrandLoader); setValue('brand_id', '') }
                                    }) } options= { categories } />
                            ) : ( <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} /> )
                        }
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
                        {
                            !brandLoader ? (
                                <Ctrl.Select name= "brand_id" size= "small" padding= "12px 15px 8px 15px" 
                                    value= { getValues().brand_id !== undefined ? getValues().brand_id : '' }
                                    register= { register('brand_id', {
                                        onChange: e => { optionsPer('assets', ['id', 'name'], setAssets, e.target.value, setAssetLoader); setValue('asset_id', '') }
                                    }) } options= { brands } />
                            ) : ( <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} /> )
                        }
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
                        {
                            !assetLoader ? (
                                <Ctrl.Select name= "asset_id" size= "small" padding= "12px 15px 8px 15px" 
                                    value= { getValues().asset_id !== undefined ? getValues().asset_id : '' }
                                    register= { register('asset_id', {
                                        onChange: e => setAsst(e.target.value)
                                    }) } options= { assets } />
                            ) : ( <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} /> )
                        }
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
                        {
                            !usersLoader ? (
                                <Ctrl.Select name= "user_id" size= "small" padding= "12px 15px 8px 15px" 
                                    value= { getValues().user_id !== undefined ? getValues().user_id : '' }
                                    register= { register('user_id', {
                                        onChange: e => setUsr(e.target.value)
                                    }) } options= { users } />
                            ) : ( <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} /> )
                        }
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