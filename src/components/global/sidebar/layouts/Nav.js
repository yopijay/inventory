// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Constants
import { Navs } from '../../../../core/global/constants/Navs';

const Nav = () => {
    return (
        <Box>
            {
                Navs().map((nav, index) => (
                    <Link to= { nav.path } key= { index } style= {{ textDecoration: 'none', color: '#000000' }}>
                        <Box width= "100%" padding= "7px 0 8px 20px">{ nav.name }</Box>
                    </Link>
                ))
            }
        </Box>
    );
}

export default Nav;