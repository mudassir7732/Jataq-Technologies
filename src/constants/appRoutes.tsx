import { RouteProps } from '../types/appRoutes';
import About from '../pages/about';
import Home from '../pages/home';
import UIUX from '../pages/ui-ux';
import DigitalMarketing from '../pages/digital-marketing';
import WebDevelopment from '../pages/web-development';
import AppDevelopment from '../pages/app-development';
import CaseStudies from '../pages/case-studies';

export const RoutesArray: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/web-development', element: <WebDevelopment /> },
    { path: '/app-development', element: <AppDevelopment /> },
    { path: '/ui-ux', element: <UIUX /> },
    { path: '/digital-marketing', element: <DigitalMarketing /> },
    { path: '/case-studies', element: <CaseStudies /> }
];