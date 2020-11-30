import React, { useState, useEffect } from "react";
import Axios from "axios";

const secret = process.env.REACT_APP_UNSPLASH_KEY;
const api = process.env.REACT_APP_UNSPLASH_API;

export default function UseFetchImage(page, term) {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch();
  }, [page, term]);

  function fetch() {
    const url = term === null ? "photos?" : `search/photos?query=${term}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}&`)
      .then((res) => {
        term === null ? fetchRandom(res) : fetchSearch(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(["Oopps Something Error"]);
      });
  }
  function fetchSearch(res) {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  function fetchRandom(res) {
    setImages([...images, ...res.data]);
    setLoading(false);
  }

  return [images, setImages, errors, loading];
}
