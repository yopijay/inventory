// Libraries
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';

// Assets
import MenuIcon from '@mui/icons-material/Menu';

const Brand = (props) => {
    const { drawerToggle, isMobile } = props;
    const Title = styled(Box)({
        textTransform: 'uppercase',
        fontFamily: 'Boldstrom',
        color: '#353b48',
        fontSize: '200%'
    });

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={ drawerToggle(!isMobile.left) } sx={{ display: { md: 'none' } }} ><MenuIcon style= {{ color: '#353b48' }} /></IconButton>
            <Link to= "/" style= {{ textDecoration: 'none' }}>
                <Title><span style= {{ color: '#40739e' }}>In</span>ventory</Title>
            </Link>
        </Box>
    );
}

export default Brand;