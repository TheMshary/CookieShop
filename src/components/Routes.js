import { Route, Switch } from "react-router";

// Components
import CookieList from "./CookieList";
import CookieDetail from "./CookieDetail";
import Home from "./Home";
import BakeryList from "./BakeryList";
import BakeryDetail from "./BakeryDetail";
import cookieStore from "../stores/cookieStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route path="/cookies/:cookieSlug">
        <CookieDetail />
      </Route>
      <Route path="/cookies">
        <CookieList cookies={cookieStore.cookies} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
