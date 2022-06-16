// Libraries
import React, { useState } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

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
        <Box sx= {{ backgroundColor: '#ffffff', display: 'flex', width: '100%', height: '100vh', overflow: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Navbar drawerToggle= { drawerToggle } isMobile= { isMobile } />
            <Box sx= {{ display: 'flex', width: '100%' }}>
                <Container>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Sidebar isMobile= { isMobile } container= { container } drawerToggle= { drawerToggle } />
                        {/* <Box sx= {{ flexGrow: '1', overflow: 'hidden'  }}>
                            <Toolbar />
                            <Routes>
                                {
                                    Layouts().map((component, index) => (
                                        <Route exact path= { component.path + '/*' } key= { index } element= { component.component } />
                                    ))
                                }
                            </Routes>
                        </Box> */}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Index;