// Libraires
import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Avatar, Box } from '@mui/material';

import { options as items } from '../../../request/Request';

const Select = ( props ) => {
    const { name, value, options, size, bgcolor, padding, radius, fullWidth, register, hasIcon = false, variant, ...other } = props;
    const [ option, setOption ] = useState();
    
    useEffect(() => {
        async function data() {
            await items(options[0], options[1], setOption)
        }
        
        data();
    }, []);
    
    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
            <Box width= "100%" bgcolor= { bgcolor || '' } borderRadius= { radius || '0' } padding= { padding || '0' }>
                <TextField 
                    select= { true } 
                    variant= { variant || 'standard' } 
                    fullWidth= { fullWidth || true } 
                    size= { size } 
                    name= { name } { ...register } 
                    InputProps= {{ disableUnderline: true }} 
                    value= { value } { ...other }>
                    {
                        (option !== undefined ? option : []).map((item, pos) => {
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
            </Box>
        </Box>
    )
}

export default Select;