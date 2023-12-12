import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppNavbar } from "./components";
import { AppointmentForm, AppointmentsList, Home, Hostlers } from "./pages";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="py-4 px-8">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hostlers/:hostlerId/book">
            <AppointmentForm />
          </Route>
          <Route path="/hostlers">
            <Hostlers />
          </Route>
          <Route path="/appointments">
            <AppointmentsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
