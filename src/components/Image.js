import React, { useState } from "react";

function Image() {
  //add images
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1476419972179-ac981d01257e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  ]);

  const [newImageURL, setnewImageURL] = useState("")

  function ShowImages() {
    return images.map((image) => {
      return (
        <div key={image} className="w-1/3">
          <img src={image} alt="" width="150" />
        </div>
      );
    });
  }
  function handleAdd() {
    setimages([
      ...images,
      newImageURL
      
      //"https://images.unsplash.com/photo-1453951115017-aa1460aa6973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"

    ])
    setnewImageURL("")
    console.log("handleAdd working");
  }

  //handle change
  function handleChange(e) {
    setnewImageURL(e.target.value)
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImages />
      </div>

      <div className="flex justify-center my-5">
        <input
          type="text"
          className="border border-gray-800 shadow rounded mr-4"
          onChange={handleChange}
          value={newImageURL}
        ></input>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>
          Add Image
        </button>
      </div>
    </section>
  );
}

export default Image;
