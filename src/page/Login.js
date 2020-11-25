import React from "react";

export default function Login() {
  function handleButtonLogin(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-warp justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-indigo-300">
        <form className="m-5 w-10/12" onSubmit={handleButtonLogin}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1>
          <div>
            <input type="email"
            className="w-full p-2 rounded shadow text-black"
             placeholder="Email or Username"></input>
          </div>
          <div>
            <input type="password"
            className="w-full p-2 rounded shadow mt-5 text-black"
             placeholder="password"></input>
          </div>
          <button className="p-2 w-full rounded shadow bg-gradient-to-r from-yellow-300 to-yellow-600 text-black mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
