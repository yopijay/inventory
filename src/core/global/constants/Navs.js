// Libraries
import React from 'react';

// Layouts
import Dashboard from '../../../components/dashboard';
import Brands from '../../../components/brands';
import Users from '../../../components/users';
import Assets from '../../../components/asset';
import Categories from '../../../components/category';
import Reports from '../../../components/report';

export const Navs = () => (
    [
        {
            name: 'Dashboard',
            path: '/',
            component: <Dashboard />
        },
        {
            name: 'Category',
            path: '/category',
            component: <Categories />
        },
        {
            name: 'Brands',
            path: '/brand',
            component: <Brands />
        },
        {
            name: 'Users',
            path: '/users',
            component: <Users />
        },
        {
            name: 'Assets',
            path: '/assets',
            component: <Assets />
        },
        {
            name: 'Reports',
            path: '/reports',
            component: <Reports />
        }
    ]
);