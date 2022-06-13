// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Layouts
import Profile from './layouts/Profile';
import Nav from './layouts/Nav';

const Index = () => {
    const [ screen, setScreen ] = useState(window.innerWidth);

    const setScreensize = () => setScreen(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', setScreensize);
        return (() => window.removeEventListener('resize', setScreensize));
    }, [screen]);

    return (
        <Box sx= {{ width: { sm: 240 }, flexShrink: { sm: 0 }, height: '100vh' }}>
            {
                screen <= 768 ? (
                    'MOBILE SIDE NAV'
                ) : (
                    <Box sx= {{ height: '100%', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: { md: 240 }, maxWidth: 240, padding: '0 0 20px 0',
                                        display: { sm: 'none', md: 'block' } }}>
                        <Grid container direction= "column" justifyContent= "space-between" alignItems= "stretch" style= {{ height: '100%' }}>
                            <Grid item>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
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