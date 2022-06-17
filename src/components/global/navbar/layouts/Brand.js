// Libraries
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Assets
import MenuIcon from '@mui/icons-material/Menu';

const Brand = (props) => {
    const { drawerToggle, isMobile } = props;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={ drawerToggle(!isMobile.left) } sx={{ display: { md: 'none' } }} >
                <MenuIcon style= {{ color: '#353b48' }} />
            </IconButton>
            <Link to= "/" style= {{ textDecoration: 'none' }}>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "IN" color= "primary.main" 
                        sx= {{ fontFamily: 'Boldstrom', fontSize: { xs: '1.75rem', sm: '1.90rem', md: '2rem' }, transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  }} />
                </Box>
            </Link>
        </Box>
    );
}

export default Brand;