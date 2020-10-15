import Image from "./components/Image";
import React, { useState, useEffect } from "react";
import "./assets/css/style.css";

function FuntionApp() {
  const [title] = useState("Click Image");
  const [isShowing, setIsshowing] = useState(false);

  useEffect(() => {
    console.log("app mounted");
  });

  function handleClick() {
    setIsshowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log("re-render")};
      <div className="w-1/2">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <button
            className="p-1 bg-blue-700 text-white my-2"
            onClick={() => {
              handleClick();
            }}
          >
            Toggle Image
          </button>
        </div>
        {isShowing ? <Image /> : null}
      </div>
    </section>
  );
}

export default FuntionApp;
