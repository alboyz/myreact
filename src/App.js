import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/Index";
import Navbar from "./components/Navbar";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import NotFound from "./page/NotFound";
import Loading from "./components/Loading";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
        setUser(user);
        setloading(false);
        console.log(user);
      } else {
        setLogin(false);
        setUser({});
        setloading(false);
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

            if (loading) return <Loading />;

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
