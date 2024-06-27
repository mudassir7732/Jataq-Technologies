import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoutesArray } from '../constants/appRoutes';
import { RouteProps } from "../types/appRoutes";
import Layout from "../components/layout";
import Home from "../pages/home";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        {RoutesArray?.map((route: RouteProps, index: number) => {
          return (
            <Route key={index} path={route.path}
              element={
                <Layout>
                  {route.element}
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}
export default AppRoutes;