import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppNavbar } from "./components";
import {
  AppointmentForm,
  AppointmentsList,
  Home,
  Hostlers,
  Notfound,
} from "./pages";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="py-4 px-8">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hostlers/:hostlerId">
            <AppointmentForm />
          </Route>
          <Route path="/hostlers">
            <Hostlers />
          </Route>
          <Route path="/appointments">
            <AppointmentsList />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
