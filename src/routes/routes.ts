import React from "react";
import PATHS from "./paths";
import IRoute from "./types";

const Home = React.lazy(() => import("../pages/Home"));
const Task = React.lazy(() => import("../pages/Task"));

const ROUTES: IRoute[] = [
  {
    path: PATHS.Home,
    component: Home,
    name: "Home",
    exact: true,
  },
  {
    path: PATHS.Task,
    component: Task,
    name: "Task",
    exact: true,
  },
];

export default ROUTES;
