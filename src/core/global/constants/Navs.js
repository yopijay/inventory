// Libraries
import React from 'react';

// Layouts
import Dashboard from '../../../components/dashboard';
import Brands from '../../../components/brands';
import Users from '../../../components/users';
import Assets from '../../../components/asset';
import Categories from '../../../components/category';
import Reports from '../../../components/report';
// import Logs from '../../../components/logs';
// import Testing from '../../../components/testing';

export const Navs = () => (
    [
        {
            name: 'Home',
            path: '/',
            subNav: []
        },
        {
            name: 'Maintenance',
            path: '',
            subNav: [
                {
                    name: 'Categories',
                    path: '/maintenance/category',
                },
                {
                    name: 'Brands',
                    path: '/maintenance/brand',
                },
                {
                    name: 'Users',
                    path: '/maintenance/users',
                },
                {
                    name: 'Assets',
                    path: '/maintenance/assets',
                }
            ]
        },
        {
            name: 'Issuance',
            path: '',
            subNav: [
                {
                    name: 'Assign Assets',
                    path: '/issuance/assets/asign',
                }
            ]
        },
        {
            name: 'Reports',
            path: '/reports',
            subNav: []
        },
    ]
);

export const Layouts = () => (
    [
        {
            path: '/',
            component: <Dashboard />
        },
        {
            path: '/maintenance/category',
            component: <Categories />
        },
        {
            path: '/maintenance/brand',
            component: <Brands />
        },
        {
            path: '/maintenance/users',
            component: <Users />
        },
        {
            path: '/maintenance/assets',
            component: <Assets />
        },
        {
            path: '/reports',
            component: <Reports />
        }
    ]
)