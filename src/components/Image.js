import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div className="w-1/3 p-1  border flex justify-center">
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
        <img src={image} alt="" width="100%" height="auto" />
      </div>
    </div>
  );
}
