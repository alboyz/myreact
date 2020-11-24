import React from "react";
import Images from "./components/Images";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Gallery() {
  return (
    <section className="flex justify-center">
      {console.log("re-render")}
      <div className="w-1/2">
        <div className="text-center">
          <Images />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="flex h-screen">
      <p className="m-auto text-3xl">Welcome Home</p>
    </div>
  );
}

function Login() {
  return (
    <div className="flex h-screen">
      <p className="m-auto text-3xl">Login Page</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
