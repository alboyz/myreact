import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AppContext from "../../store/AppContext";

export default function AuthRoute(props) {
  const [login] = useContext(AppContext);

  if (login) return <Route {...props} />;

  return <Redirect to="/login" />;
}
