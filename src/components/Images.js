import React, { useState, useEffect } from "react";
import Image from "./Image";
import UseFetchImage from "../utils/hooks/UseFetchImage";
import Loading from "./Loading";
import UseScroll from "../utils/hooks/UseScrooll";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Images() {
  const [page, setpage] = useState(1);
  const [images, setImages, errors, setLoading] = UseFetchImage(page);
  const scrollPosition = UseScroll();

  useEffect(() => {
    if (scrollPosition === document.body.offsetHeight - window.innerHeight) {
      setpage(page + 1);
      console.log("I am in bottom");
    }
  }, [scrollPosition]);

  function handleRemove(index) {
    // setimages(images.filter((image, i) => i !== index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    console.log("I am changing state");
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setpage + 1}
        className="flex flex-wrap"
      >
        {images.map((img, index) => (
          <Image
            image={img.urls.regular}
            handleRemove={handleRemove}
            index={index}
            key={index}
          />
        ))}
      </InfiniteScroll>
    );
  }

  return (
    <section>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      ) : null}

      <ShowImage />

      {setLoading && <Loading />}
    </section>
  );
}
