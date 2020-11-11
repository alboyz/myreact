import Images from "./components/Images";
import React from "react";
import "./assets/css/style.css";

function FuntionApp() {
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

export default FuntionApp;
