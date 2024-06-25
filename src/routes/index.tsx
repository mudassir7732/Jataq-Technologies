import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "../pages/about";
import { RoutesArray } from '../constants/appRoutes';
import { RouteProps } from "../types/appRoutes";

const AppRoutes: FC = () => {
    return (
        <Router>
            <Routes>
                {RoutesArray?.map((route: RouteProps, index: number) => {
                    return (
                        <Route path={route.path}
                            element={
                                <>
                                    <Header />
                                    {route.element}
                                    <Footer />
                                </>
                            }
                        />
                    )
                })}
            </Routes>
        </Router>
    )
}
export default AppRoutes;