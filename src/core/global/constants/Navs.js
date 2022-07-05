// Libraries
import React from 'react';

// Layouts
import Dashboard from '../../../components/dashboard';
import Brands from '../../../components/maintenance/brands';
import Users from '../../../components/maintenance/users';
import Assets from '../../../components/maintenance/asset';
import Categories from '../../../components/maintenance/category';
import Customer from '../../../components/maintenance/customer';
import IssuanceAsset from '../../../components/issuance/asset';
import TestReport from '../../../components/issuance/testreport';
import RprtCategory from '../../../components/report/category';
import RprtBrand from '../../../components/report/brand';
import RprtUsers from '../../../components/report/users';
import RprtAssets from '../../../components/report/asset';

// Context
import { DialogProvider } from '../../context/DialogContext';

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
                    label: 'Category'
                },
                {
                    name: 'Brands',
                    path: '/maintenance/brand',
                    label: 'Brand'
                },
                {
                    name: 'Users',
                    path: '/maintenance/users',
                    label: 'User'
                },
                {
                    name: 'Assets',
                    path: '/maintenance/assets',
                    label: 'Asset'
                },
                {
                    name: 'Customer',
                    path: '/maintenance/customer',
                    label: 'Customer'
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
                    label: 'Assign Asset'
                },
                {
                    name: 'Test Report',
                    path: '/issuance/test-report',
                    label: 'Test Report'
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
                    label: 'Category'
                },
                {
                    name: 'Brands Report',
                    path: '/reports/brand',
                    label: 'Brand'
                },
                {
                    name: 'Users Report',
                    path: '/reports/users',
                    label: 'User'
                },
                {
                    name: 'Assets Report',
                    path: '/reports/assets',
                    label: 'Asset'
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
            component: <Customer />
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
            component: <DialogProvider><RprtCategory /></DialogProvider>
        },
        {
            name: 'Reports',
            path: '/reports/brand',
            component: <DialogProvider><RprtBrand /></DialogProvider>
        },
        {
            name: 'Reports',
            path: '/reports/users',
            component: <DialogProvider><RprtUsers /></DialogProvider>
        },
        {
            name: 'Reports',
            path: '/reports/assets',
            component: <DialogProvider><RprtAssets /></DialogProvider>
        }
    ]
)