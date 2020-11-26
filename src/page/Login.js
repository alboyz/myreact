import React, { useState } from "react";
import firebase from "../config/firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleButtonLogin(e) {
    if (loading) return;
    setLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword("mopek921@gmail.com", "passwor")
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-warp justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-indigo-300">
        <form className="m-5 w-10/12" onSubmit={handleButtonLogin}>
          {(error !== "") && <p>{error}</p>}
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1>
          <div>
            <input
              type="email"
              className="w-full p-2 rounded shadow text-black"
              placeholder="Email or Username"
            ></input>
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 rounded shadow mt-5 text-black"
              placeholder="password"
            ></input>
          </div>
          <button className="p-2 w-full rounded shadow bg-gradient-to-r from-yellow-300 to-yellow-600 text-black mt-5">
            {loading ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
