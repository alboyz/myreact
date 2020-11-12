import React, { useState, useEffect } from "react";
import Axios from "axios";

const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function UseFetchImage(page) {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(
      `https://api.unsplash.com/photos/?client_id=${secret}&page=${page}`,
    )
      .then((res) => {
        setImages([...images, ...res.data]);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errors);
        setLoading(false);
      });
  }, [page]);

  return [images, setImages, errors, loading];
}
