// Libraries
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Layouts
import Category from './layouts/Category';
import Brand from './layouts/Brand';
import Users from './layouts/Users';
import Assets from './layouts/Assets';
import AssignedAsset from './layouts/AssignedAssets';

const Index = () => {

    useEffect(() => {
        localStorage.setItem('nav', 'Reports');
    }, []);

    return (
        <Box padding= "10px 30px">
        </Box>
    );
}

export default Index;