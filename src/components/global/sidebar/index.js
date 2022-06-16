// Libraries
import React, { useEffect, useState } from 'react';
import { Box, SwipeableDrawer } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Layouts
import Profile from './layouts/Profile';
import Nav from './layouts/Nav';

const Index = (props) => {
    const { isMobile, container, drawerToggle } = props;
    const [ screen, setScreen ] = useState(window.innerWidth);

    const setScreensize = () => setScreen(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', setScreensize);
        return (() => window.removeEventListener('resize', setScreensize));
    }, [screen]);

    return (
        <Box sx= {{ width: { md: 240 }, flexShrink: { sm: 0 }, height: '100vh' }}>
            {
                screen <= 900 ? (
                    <SwipeableDrawer anchor= "left" onOpen= { drawerToggle(true) } variant= "temporary" container= { container } open= { isMobile.left } onClose= { drawerToggle(false) } 
                        ModalProps= {{ keepMounted: true }}
                        sx= {{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)',  } }}>
                        <Box sx= {{ height: '100%', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: { md: 240, sm: '100%' }, maxWidth: 240, padding: { xs: 0, md: '0 0 20px 0' } }}>
                            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', height: '100%' }}>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ height: '100%', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                                    <Profile />
                                    <Nav />
                                </Box>
                                <Box sx= {{ padding: '5px' }}>
                                    <Ctrl.Button text= "Logout" variant= "contained" />
                                </Box>
                            </Box>
                        </Box>
                    </SwipeableDrawer>
                ) : (
                    <Box sx= {{ height: '100%', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: { md: 240 }, maxWidth: 240, padding: '0 0 20px 0',
                                        display: { xs: 'none', md: 'block' } }}>
                        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', height: '100%' }}>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ height: '100%', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                                <Profile />
                                <Nav />
                            </Box>
                            <Ctrl.Button text= "Logout" variant= "contained" />
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
}

export default Index;