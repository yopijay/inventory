// Libraries
import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Assets
import MenuIcon from '@mui/icons-material/Menu';

// Context
import { NavContext } from '../../../../core/context/NavContext';

const Brand = (props) => {
    // eslint-disable-next-line
    const [ isActive, setIsActive, expand, setExpand ] = useContext(NavContext);
    const { drawerToggle, isMobile } = props;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={ drawerToggle(!isMobile.left) } sx={{ display: { md: 'none' } }} >
                <MenuIcon style= {{ color: '#353b48' }} />
            </IconButton>
            <Link to= "/" style= {{ textDecoration: 'none' }} onClick= { () => {setIsActive('Home'); localStorage.setItem('nav', 'Home'); setExpand('') } }>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Ctrl.Typography text= "KC" color= "primary.main" 
                        sx= {{ fontFamily: 'Boldstrom', fontSize: { xs: '1.75rem', sm: '1.90rem', md: '2rem' }, transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <Ctrl.Typography text= "IC" color= "text.primary" 
                        sx= {{ fontFamily: 'Boldstrom', fontSize: { xs: '1.75rem', sm: '1.90rem', md: '2rem' }, transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  }} />
                </Box>
            </Link>
        </Box>
    );
}

export default Brand;