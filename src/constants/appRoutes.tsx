import React, { createElement } from 'react';
import Home from '../pages/home';
import { RouteProps } from '../types/appRoutes';

export const RoutesArray: RouteProps[] = [
    {
        path: '/', element: <Home />
    },
    {

        path: '/about', element: <Home />
    },
];