import React, { useState } from "react";

function Image() {
  //add images
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1476419972179-ac981d01257e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  ]);

  const [newImageURL, setnewImageURL] = useState("");

  function ShowImages() {
    return images.map((image, index) => {
      return (
        <div key={index} className="w-1/3">
          <div className="relative">
            <i
              className="fas fa-times bg-red-300 ml-6 absolute cursor-pointer opacity-25 hover:opacity-100q"
              onClick={() => handleRemove(index)}
            ></i>
            <img src={image} alt="" width="150" />
          </div>
        </div>
      );
    });
  }
  function handleRemove(index) {
    //you can remove with this way
    //setimages(images.filter((image, i) => i !== index));
    //OR

    //Notes: How Spread Operator Work
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }
  function handleAdd() {
    if (newImageURL !== "") {
      setimages([...images, newImageURL]);
      setnewImageURL("");
      console.log("image add");
    } else {
      console.log("image not add");
    }
  }

  //handle change
  function handleChange(e) {
    setnewImageURL(e.target.value);
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImages />
      </div>

      <div className="flex justify-center my-5">
        <input
          type="text"
          className="border border-gray-800 shadow rounded mr-4 w-full"
          onChange={handleChange}
          value={newImageURL}
        ></input>
        <button
          disabled={newImageURL !== ""}
          className={`p-2 text-white ${
            newImageURL !== "" ? "bg-green-600" : "bg-green-300"
          }`}
          onClick={handleAdd}
        >
          Add Image
        </button>
      </div>
    </section>
  );
}

export default Image;
