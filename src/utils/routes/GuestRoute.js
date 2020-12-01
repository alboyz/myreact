import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AppContext from "../../store/AppContext";

export default function GuestRoute(props) {
  const [login] = useContext(AppContext);

  if (!login) return <Route {...props} />;

  return <Redirect to="/" />;
}
