import React from "react";
import PATHS from "./paths";
import IRoute from "./types";

const Home = React.lazy(() => import("../pages/Home"));

const ROUTES: IRoute[] = [
  {
    path: PATHS.Home,
    component: Home,
    name: "Home",
    exact: true,
  },
];

export default ROUTES;
