// Libraries
import React, { useState } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../core/global/controls/Controls';

// Layouts
import Navbar from './global/navbar';
import Sidebar from './global/sidebar';

// Constants
import { Layouts } from '../core/global/constants/Navs';

const Index = (props) => {
    const { window } = props;
    const [ isMobile, setIsMobile ] = useState({ left: false });

    const drawerToggle = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsMobile({ isMobile, left: open });
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx= {{ backgroundColor: '#ffffff', display: 'flex', width: '100%', height: '100vh' }}>
            <Navbar drawerToggle= { drawerToggle } isMobile= { isMobile } />
            <Box sx= {{ display: 'flex', width: '100%' }}>
                <Container fixed sx= {{ padding: 0}}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Sidebar isMobile= { isMobile } container= { container } drawerToggle= { drawerToggle } />
                        <Box sx= {{ width: '100%', height: '100vh', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                            <Toolbar />
                            <Routes>
                                {
                                    Layouts().map((component, index) => ( <Route exact path= { component.path + '/*' } key= { index } 
                                        element= { 
                                            <Box sx= {{ padding: { xs: 0, md: '15px 16px 0 16px' } }}>
                                                <Ctrl.Typography text= { component.name }
                                                                                        sx= {{ fontSize: { xs: '1.5rem', sm: '1.65rem', md: '1.8rem' }, fontWeight: 'bold', textTransform: 'uppercase', 
                                                                                                    transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                                                                    padding: { xs: '0 14px', sm: 0 } }} />
                                                { component.component }
                                            </Box>
                                        } /> ))
                                }
                            </Routes>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Index;