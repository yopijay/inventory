// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/styles';

const Typography = ( props ) => {
    const { text, fontFamily= 'Gilroy Light', color= '#dfe6e9', ...other } = props;

    const Text = styled(Box)({
        fontFamily: fontFamily,
        color: color
    });

    return (
        <Text { ...other }>{ text }</Text>
    );
}

export default Typography;