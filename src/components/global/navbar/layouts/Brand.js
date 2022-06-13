// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';

const Brand = () => {

    const Title = styled(Box)({
        textTransform: 'uppercase',
        fontFamily: 'Boldstrom',
        color: '#353b48',
        fontSize: '200%'
    });

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Link to= "/" style= {{ textDecoration: 'none' }}>
                <Title><span style= {{ color: '#40739e' }}>In</span>ventory</Title>
            </Link>
        </Box>
    );
}

export default Brand;