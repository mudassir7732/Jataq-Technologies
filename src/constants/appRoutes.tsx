import { RouteProps } from '../types/appRoutes';
import About from '../pages/about';
import Home from '../pages/home';
import WebDev from '../pages/web-dev';
import UIUX from '../pages/ui-ux';
import DigitalMarketing from '../pages/digital-marketing';

export const RoutesArray: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/web-dev', element: <WebDev /> },
    { path: '/ui-ux', element: <UIUX /> },
    { path: '/digital-marketing', element: <DigitalMarketing /> },
];