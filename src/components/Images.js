import React, { useState } from "react";
import Image from "./Image";
import UseFetchImage from "../utils/hooks/UseFetchImage";
import Loading from "./Loading";

export default function Images() {
  const [page, setpage] = useState(1);
  const [images, setImages, errors, setLoading] = UseFetchImage(page);

  function handleRemove(index) {
    // setimages(images.filter((image, i) => i !== index));
    setImages([
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


  return setLoading ? (
    <Loading/>
  ) :(
    <section>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      ) : null}

      <div className="gap-0" style={{ columnCount: 4 }}>
        <ShowImage />
      </div>
      {errors.length > 0 ? null : (
        <button
          onClick={() => {
            setpage(page + 1);
          }}
        >
          Load More
        </button>
      )}
    </section>
  );
}
