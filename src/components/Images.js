import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Image from "./Image";

export default function Images() {
  const [images, setimages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      `${process.env.REACT_APP_UNPLASH_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`,
    ).then((res) => {
      setimages(res.data);
    });
  }, []);

  const [newImageUrl, setNewImageUrl] = useState("");

  function handleRemove(index) {
    // setimages(images.filter((image, i) => i !== index));
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    console.log("I am changing state");
  }

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setimages([newImageUrl, ...images]);
      setNewImageUrl("");
    }
  }

  function handleChange(event) {
    setNewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="gap-0" style={{ columnCount: 4 }}>
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button
            disabled={newImageUrl === ""}
            className={`p-2 text-white ml-2 ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
