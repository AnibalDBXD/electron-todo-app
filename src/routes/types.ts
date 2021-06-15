import { LazyExoticComponent, FC } from "react";
import { RouteProps } from "react-router-dom";
import PATHS from "./paths";

interface IRoute {
    path?: PATHS;
    component?: LazyExoticComponent<FC<RouteProps>>;
    name?: string;
    exact?: boolean;
}

export default IRoute;
