import React, { useState, useEffect } from "react";
import Axios from "axios";

const secret = process.env.REACT_APP_UNSPLASH_KEY;
const url = process.env.REACT_APP_UNSPLASH_API;

export default function UseFetchImage(page, term) {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(`${url}/photos?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errors);
        setLoading(false);
      });
  }, [page]);
  useEffect(() => {
    if (term === null) return;
    Axios.get(
      `${url}/search/photos?client_id=${secret}&page=${page}&query=${term}`,
    )
      .then((res) => {
        setImages([...res.data.results]);
      })

      .catch(() => {
        setError(["Oopps Something Error"]);
      });
  }, [term]);
  return [images, setImages, errors, loading];
}
