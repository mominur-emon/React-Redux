import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLodding, setIsLodding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("feacthing is not successfull");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLodding(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLodding(false);
      });
  }, [url]);

  return { data, isLodding, error };
};

export default useFetch;
