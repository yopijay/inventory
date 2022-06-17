// Libraires
import React from 'react';
import { TextField, MenuItem, Avatar, Box } from '@mui/material';

const Select = ( props ) => {
    const { options, register, hasIcon = false, ...other } = props;
    
    return (
        <TextField 
            select= { true } { ...register } { ...other }>
                <MenuItem value= "" disabled>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box marginLeft= "5px">-- Please select below --</Box>
                    </Box>
                </MenuItem>
            {
                (options).map((item, pos) => {
                    return (
                        <MenuItem key= { pos } value= { item.id }>
                            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                                <Box marginRight= "5px">{ hasIcon ? <Avatar src= { item.icon } sx= {{ width: "35px", height: "35px" }} alt= "icon" /> : '' }</Box>
                                <Box marginLeft= "5px">{ item.name }</Box>
                            </Box>
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}

export default Select;