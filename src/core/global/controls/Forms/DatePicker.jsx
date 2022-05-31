// Libraries
import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, TextField  } from '@mui/material';
import MuiDatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const DatePicker = ( props ) => {
    const { name, label, event, color = '#000000', inputsize = '13px', align = 'left', ...other } = props;
    const [ value, setValue ] = useState(new Date());

    const styles = makeStyles(({
        defaultTextField: {
            '& .MuiOutlinedInput-root, & .css-nz481w-MuiInputBase-input-MuiInput-input, & .css-2duac4': {
                color: `${ color } !important`,
                fontFamily: 'Gilroy Light !important',
                fontSize: `${ inputsize } !important`,
                textAlign: `${ align } !important`,
                padding: '0',

                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '50px !important'
                },
                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '10px 14px',
                    border: 'none !important',
                    outline: 'none !important'
                }
            },
            '& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled, & .css-nz481w-MuiInputBase-input-MuiInput-input.Mui-disabled, & .css-2duac4.Mui-disabled': {
                WebkitTextFillColor: `${ color } !important`
            },
            '& .css-1qf00ev-MuiTypography-root': {
                color: `${ color } !important`,
                fontSize: `${ inputsize } !important`
            },
            '& .css-i4bv87-MuiSvgIcon-root': {
                color: `${ color } !important`
            }
        }
    }));

    let dsg = styles();

    return (
        <LocalizationProvider dateAdapter= { AdapterDateFns }>
            <Box width= "100%">
                <MuiDatePicker
                    name= { name }
                    label= { label }
                    value= { value }
                    onChange= { newValue => setValue(newValue) }
                    renderInput={ (params) => <TextField {...params} helperText= {null} className= { dsg.defaultTextField } /> }
                    { ...other }
                />
            </Box>
        </LocalizationProvider>
    );
}

export default DatePicker;