// Libraries
import React from 'react';
import { Typography as MuiTypography } from '@mui/material';

const Typography = (props) => {
    const { text, ...others } = props;

    return (
        <MuiTypography { ...others }>{ text }</MuiTypography>
    );
}

export default Typography;