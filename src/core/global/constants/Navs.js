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
import RCategory from '../../../components/report/layouts/list/category';
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
            path: '/issuance/test-report',
            component: <TestReport />
        },
        {
            path: '/issuance/assets',
            component: <IssuanceAsset />
        },
        {
            path: '/reports/category',
            component: <RCategory />
        },
        {
            path: '/reports/brand',
            component: "brand"
        },
        {
            path: '/reports/users',
            component: "users"
        },
        {
            path: '/reports/assets',
            component: "assets"
        }
    ]
)