import React from "react";

function Image() {
  //basic component inside component

  const Images = [
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1476419972179-ac981d01257e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  ];

  function ShowImages() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} alt="" width="150" />
        </div>
      );
    });
  }
  return (
    <section>
      <div className="flex justify-center">
        <ShowImages/>
      </div>
    </section>
  );
}

export default Image;
