// This routes file apply lazy loading for all components.
import { Routes } from '@angular/router';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { Home } from '../pages/home/home';
import { Courses } from '../pages/courses/courses';
import { AboutUs } from '../pages/about-us/about-us';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'courses',
                component: Courses
            },
            {
                path: 'about-us',
                component: AboutUs
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('../layouts/admin-layout/admin-layout').then(
            (c) => c.AdminLayout
        )
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];