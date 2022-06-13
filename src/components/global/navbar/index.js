// Libraries
import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';

// Layouts
import Brand from './layouts/Brand';

const Index = () => {
    return (
        <AppBar position= "fixed"
            sx= {{ 
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(245, 246, 250, 0.2)',
                boxShadow: 'none',
                padding: '7px 0',
                maxHeight: '120px',
                overflow: 'hidden',
                zIndex: '1201'
            }}>
            <Container>
                <Grid container direction= "row" justifyContent= "space-between" alignItems= "center">
                    <Grid item xs= { 12 } sm= { 4 } md= { 5 }>
                        <Brand />
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default Index;