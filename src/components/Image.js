import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setisHovering] = useState(false);
  const [showPriview, setShowPreview] = useState(false);

  return (
    <div className="w-1/6 p-1  border flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setisHovering(true)}
        onMouseLeave={() => setisHovering(false)}
      >
        <i
          className={`fas fa-times bg-red-300 ml-3 absolute cursor-pointer opacity-0 hover:opacity-100 ${
            isHovering === index ? "opacity-25" : "opacity-0"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img
          onClick={() => setShowPreview(true)}
          src={image}
          alt=""
          width="100%"
          height="auto"
        />
      </div>
      {showPriview && (
        <section
          className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
          onClick={() => setShowPreview(false)}
        >
          <div>
            <div className="bg-white">
              <img src={image} alt="" width="300" height="auto" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
