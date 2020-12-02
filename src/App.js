import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./utils/routes/Index";
import Navbar from "./components/Navbar";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import NotFound from "./page/NotFound";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
        setUser(user);
        console.log(user);
      } else {
        setLogin(false);
        setUser({});
      }
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={[login, user]}>
        <Navbar />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
