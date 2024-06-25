import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { RoutesArray } from '../constants/appRoutes';
import { RouteProps } from "../types/appRoutes";

const AppRoutes: FC = () => {
    return (
        <Router>
            <Routes>
                {RoutesArray?.map((route: RouteProps, index: number) => {
                    return (
                        <Route key={index} path={route.path}
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