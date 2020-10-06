import React, {  useState } from "react";
import "./assets/css/style.css";

function FuntionApp() {
  const [title] = useState("Click Image");
  const [isShowing, setIsshowing] = useState(false);

  function handleClick  () {
    setIsshowing(!isShowing);
  };

  return (
    <section className="flex justify-center">
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
        {isShowing ? (
          <img
            src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80"
            alt="imagehalo"
          />
        ) : null}
      </div>
    </section>
  );
}

export default FuntionApp;
