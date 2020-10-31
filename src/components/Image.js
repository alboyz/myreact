import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div className="w-1/3">
      <div
        className="relative"
        onMouseEnter={() => setisHovering(true)}
        onMouseLeave={() => setisHovering(false)}
      >
        <i
          className={`fas fa-times bg-red-300 ml-6 absolute cursor-pointer opacity-0 hover:opacity-100 ${
            isHovering === index ? "opacity-25" : "opacity-0"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} alt="" width="150" />
      </div>
    </div>
  );
}
