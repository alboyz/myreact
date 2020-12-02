import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Navbar() {
  const [login, user] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e.respone.data);
      });
  }

  return (
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
        <li className="mr-5">
          <NavLink
            to="/"
            exact={true}
            activeClassName="underline text-blue-200"
          >
            Home
          </NavLink>
        </li>

        <li className="mr-5">
          <NavLink to="/gallery" activeClassName="underline text-blue-200">
            Gallery
          </NavLink>
        </li>
      </ul>

      <ul className="flex justify-between px-10">
        <li>
          {login ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="underline text-blue-200">
              Login
            </NavLink>
          )}
        </li>

        {!login && (
          <li className="ml-5">
            <NavLink to="/signup" activeClassName="underline text-blue-200">
              SignUp
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
