import React, { useState, useEffect } from "react";
import Image from "./Image";
import UseFetchImage from "../utils/hooks/UseFetchImage";
import Loading from "./Loading";
import UseScroll from "../utils/hooks/UseScrooll";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Images() {
  const [page, setpage] = useState(1);
  const [term, setSearchTerm] = useState(null);
  const [images, setImages, errors, setLoading] = UseFetchImage(page, term);
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

  function handleInput(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          onChange={handleInput}
          className="w-full border rounded p-2"
          placeholder="Search Photos Here"
        ></input>
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}

      <ShowImage />

      {setLoading && <Loading />}
    </section>
  );
}
