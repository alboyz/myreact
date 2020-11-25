import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
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
          <li className="float-rigt">
            <Link to="/login">Login</Link>
          </li>
        
      </ul>
    </nav>
  );
}
