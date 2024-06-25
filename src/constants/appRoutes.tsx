import { RouteProps } from '../types/appRoutes';
import About from '../pages/about';
import Home from '../pages/home';

export const RoutesArray: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
];