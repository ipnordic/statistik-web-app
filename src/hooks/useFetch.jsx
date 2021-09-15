import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, username, password) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Henter data...");
    setData(null);
    setError(null);
    const response = axios(url, {
      auth: { username: username, password: password },
    })
      .then((response) => {
        if (response.statusText !== "OK") {
          throw new Error("Der opstod en fejl..");
        }
        setLoading(false);
        response.data && setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    return response;
  }, [url, username, password]);

  return { data, loading, error };
}

export default useFetch;
