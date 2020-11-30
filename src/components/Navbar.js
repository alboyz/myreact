import React, {  useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Navbar() {
 const [ login, user] = useContext(AppContext)
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
