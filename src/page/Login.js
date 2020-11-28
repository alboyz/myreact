import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../config/firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);

  function handleButtonLogin(e) {
    if (loading) return;
    setLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log(res);
        setLogin(true)
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value, e.target.name);
  }

  if (login) return <Redirect to="/" />;

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-warp justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-indigo-300">
        <form className="m-5 w-10/12" onSubmit={handleButtonLogin}>
          {error !== "" && <p>{error}</p>}
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1>
          <div>
            <input
              type="email"
              className="w-full p-2 rounded shadow text-black"
              name="email"
              placeholder="Email or Username"
              value={form.email}
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 rounded shadow mt-5 text-black"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleInput}
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
