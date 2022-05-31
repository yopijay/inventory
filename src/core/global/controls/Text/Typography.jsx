// Libraries
import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

const Typography = ( props ) => {
    const { text, variant, event, ...other } = props;

    return (
        <MuiTypography variant= { variant } onClick= { event } { ...other }>{ text }</MuiTypography>
    );
}

export default Typography;