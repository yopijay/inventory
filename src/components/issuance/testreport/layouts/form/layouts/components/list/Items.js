// Libraries
import React from 'react';
import { Box, TableCell, TableRow } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Assets
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Items = (props) => {
    const { register, index, append, remove, getValues, errors } = props;
    // eslint-disable-next-line
    const defaultVal = getValues().items;
    const error = errors.items;

    return (
        <TableRow>
            <TableCell align= "center">{ parseInt(index) + 1 }</TableCell>
            <TableCell>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box sx= {{ border: `solid 1px ${ error !== undefined ? error[index] !== undefined ? error[index].device !== undefined ? '#e84118' : '#dcdde1' : '#dcdde1' : '#dcdde1'}`, 
                                        borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `items[${index}].device` } register= { register(`items[${index}].device`) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Device" />
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box sx= {{ border: `solid 1px ${ error !== undefined ? error[index] !== undefined ? error[index].symbol_id !== undefined ? '#e84118' : '#dcdde1' : '#dcdde1' : '#dcdde1'}`, 
                                        borderRadius: '5px', padding: '5px 5px' }}>
                        <Ctrl.Select name= { `items[${index}].symbol_id` } fullWidth register= { register(`items[${index}].symbol_id`) } 
                            variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= "" options= { [] } />
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box sx= {{ border: `solid 1px ${ error !== undefined ? error[index] !== undefined ? error[index].description_id !== undefined ? '#e84118' : '#dcdde1' : '#dcdde1' : '#dcdde1'}`, 
                                        borderRadius: '5px', padding: '5px 5px' }}>
                        <Ctrl.Select name= { `items[${index}].description_id` } fullWidth register= { register(`items[${index}].description_id`) } 
                            variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= "" options= { [] } />
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box sx= {{ border: `solid 1px ${ error !== undefined ? error[index] !== undefined ? error[index].quantity !== undefined ? '#e84118' : '#dcdde1' : '#dcdde1' : '#dcdde1'}`, 
                                        borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `items[${index}].quantity` } type= "number" register= { register(`items[${index}].quantity`) } 
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Quantity" />
                    </Box>
                </Box>
            </TableCell>
            <TableCell align= "center">
                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx= {{ margin: '5px' }}>
                        <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center"
                            onClick= { () => append({}) }><AddIcon style= {{ fontSize: '110%' }} /></Box>
                    </Box>
                    <Box sx= {{ margin: '5px' }}>
                        <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center"
                            onClick= { () => remove(index) }><RemoveIcon style= {{ fontSize: '110%' }} /></Box>
                    </Box>
                </Box>    
            </TableCell>
        </TableRow>
    );
}

export default Items;