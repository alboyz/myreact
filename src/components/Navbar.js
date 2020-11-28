import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";

export default function Navbar() {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      }
      //console.log(user);
    });
  }, []);

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
        setLogin(false)
      })
      .catch((e) => {
        console.log(e.respone.data);
      });
  }

  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>

          <li className="mr-5">
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        <li className="float-right">
          {login ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
