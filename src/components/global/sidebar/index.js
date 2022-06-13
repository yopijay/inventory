// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid, SwipeableDrawer } from '@mui/material';

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
                            <Grid container direction= "column" justifyContent= "space-between" alignItems= "stretch" style= {{ height: '100%' }}>
                                <Grid item>
                                    <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Profile />
                                        <Nav />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx= {{ overflow: 'hidden', borderRadius: { xs: 0, md: '3px' }, backgroundColor: '#487eb0', padding: '8px 0',
                                                        '&:hover': { backgroundColor: '#40739e', transition: 'all 0.3s ease-in-out' }, textAlign: 'center', color: '#f5f6fa' }}>
                                        <Box sx= {{ textTransform: 'uppercase', cursor: 'pointer' }}>Logout</Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </SwipeableDrawer>
                ) : (
                    <Box sx= {{ height: '100%', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: { md: 240 }, maxWidth: 240, padding: '0 0 20px 0',
                                        display: { xs: 'none', md: 'block' } }}>
                        <Grid container direction= "column" justifyContent= "space-between" alignItems= "stretch" style= {{ height: '100%' }}>
                            <Grid item>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" height= "650px" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                                    <Profile />
                                    <Nav />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx= {{ overflow: 'hidden', borderRadius: '3px', backgroundColor: '#487eb0', padding: '8px 0',
                                                    '&:hover': { backgroundColor: '#40739e', transition: 'all 0.3s ease-in-out' }, textAlign: 'center', color: '#f5f6fa' }}>
                                    <Box sx= {{ textTransform: 'uppercase', cursor: 'pointer' }}>Logout</Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
        </Box>
    );
}

export default Index;