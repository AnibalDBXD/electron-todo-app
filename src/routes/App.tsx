import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";
import Loading from "../components/Loading";

const AppRouter = (): JSX.Element => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Switch>
        {ROUTES.map(({
          component, exact, name, path,
        }) => (
          <Route
            component={component}
            exact={exact && exact}
            key={name}
            path={path}
          />
        ))}
      </Switch>
    </Router>
  </Suspense>
);

export default AppRouter;