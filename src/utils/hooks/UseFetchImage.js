import React, { useState, useEffect } from "react";
import Axios from "axios";

const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function UseFetchImage(page) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.unsplash.com/photos/?client_id=${secret}&page=${page}`).then((res) => {
      setImages([...images, ...res.data]);
    });
  }, [page]);

  return [images, setImages];
}
