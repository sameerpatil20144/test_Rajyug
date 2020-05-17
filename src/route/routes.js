/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import { lazy } from 'react';
import DefaultLayout from '../layout/defaultLayout'

const Login = lazy(() => import('../components/login'));
const Dashboard = lazy(() => import('../components/dashboard'));
const Inventories = lazy(() => import('../views/Inventories'));
const HRManagement = lazy(() => import('../views/HRManagement'));
const Finance = lazy(() => import('../views/Finance'));
const Settings = lazy(() => import('../views/Settings'));

export var routes = [
    {
        path: '/',
        component: Login,
        isNotRequired: true,
        linkName: ''
    },
    {
        path: '/login',
        component: Login,
        isNotRequired: true,
        linkName: ''
    },
    {
        path: '/logout',
        component: Login,
        linkName: ''
    },
    {
        path: '/dashboard',
        component: Dashboard,
        layout: DefaultLayout,
        linkName: '',
        isAccessible: 'showDashboard'
    },
    {
        path: '/hr-management',
        component: HRManagement,
        layout: DefaultLayout,
        linkName: 'hr',
        isAccessible: 'showMasterIcon'
    },
    {
        path: '/finance',
        component: Finance,
        layout: DefaultLayout,
        linkName: 'finance',
        isAccessible: 'showMasterIcon'
    },
    {
        path: '/inventories',
        component: Inventories,
        layout: DefaultLayout,
        linkName: 'inventory',
        isAccessible: 'showIcon'
    },
    {
        path: '/settings',
        component: Settings,
        layout: DefaultLayout,
        linkName: 'setting',
        isAccessible: 'showIcon'
    }
]
