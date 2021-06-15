import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";

const AppRouter = (): JSX.Element => (
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
);

export default AppRouter;
