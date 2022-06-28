// Libraries
import React from 'react';

// Layouts
import Dashboard from '../../../components/dashboard';
import Brands from '../../../components/maintenance/brands';
import Users from '../../../components/maintenance/users';
import Assets from '../../../components/maintenance/asset';
import Categories from '../../../components/maintenance/category';
import IssuanceAsset from '../../../components/issuance/asset';
import TestReport from '../../../components/issuance/testreport';
import RprtCategory from '../../../components/report/category';
// import Reports from '../../../components/report';
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
                    name: 'Colors',
                    path: '/maintenance/color',
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
                },
                {
                    name: 'Customer',
                    path: '/maintenance/customer',
                }
            ]
        },
        {
            name: 'Issuance',
            path: '',
            subNav: [
                {
                    name: 'Assign Assets',
                    path: '/issuance/assets',
                },
                {
                    name: 'Test Report',
                    path: '/issuance/test-report',
                }
            ]
        },
        {
            name: 'Reports',
            path: '',
            subNav: [
                {
                    name: 'Categories Report',
                    path: '/reports/category',
                },
                {
                    name: 'Brands Report',
                    path: '/reports/brand',
                },
                {
                    name: 'Users Report',
                    path: '/reports/users',
                },
                {
                    name: 'Assets Report',
                    path: '/reports/assets',
                }
            ]
        },
    ]
);

export const Layouts = () => (
    [
        {
            name: 'Dashboard',
            path: '/',
            component: <Dashboard />
        },
        {
            name: 'Maintenance',
            path: '/maintenance/category',
            component: <Categories />
        },
        {
            name: 'Maintenance',
            path: '/maintenance/color',
            component: "COLORS"
        },
        {
            name: 'Maintenance',
            path: '/maintenance/brand',
            component: <Brands />
        },
        {
            name: 'Maintenance',
            path: '/maintenance/users',
            component: <Users />
        },
        {
            name: 'Maintenance',
            path: '/maintenance/assets',
            component: <Assets />
        },
        {
            name: 'Maintenance',
            path: '/maintenance/customer',
            component: "Customer"
        },
        {
            name: 'Issuance',
            path: '/issuance/test-report',
            component: <TestReport />
        },
        {
            name: 'Issuance',
            path: '/issuance/assets',
            component: <IssuanceAsset />
        },
        {
            name: 'Reports',
            path: '/reports/category',
            component: <RprtCategory />
        },
        {
            name: 'Reports',
            path: '/reports/brand',
            component: "brand"
        },
        {
            name: 'Reports',
            path: '/reports/users',
            component: "users"
        },
        {
            name: 'Reports',
            path: '/reports/assets',
            component: "assets"
        }
    ]
)