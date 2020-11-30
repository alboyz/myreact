import React, {useState, useEffect} from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";
import Navbar from "./components/Navbar";
import firebase from './config/firebase';
import AppContext from "./store/AppContext";

function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})


   useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
        setUser(user);
        console.log(user);
      }else{
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
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
