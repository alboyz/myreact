import Image from "./components/Image";
import React, { useState, } from "react";
import "./assets/css/style.css";

function FuntionApp() {
  const [title] = useState("Click Image");
  

  return (
    <section className="flex justify-center">
      {console.log("re-render")}
      <div className="w-1/2">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <Image />
        </div>
      </div>
    </section>
  );
}

export default FuntionApp;
