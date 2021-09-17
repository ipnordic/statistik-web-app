import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(statType, startDate, endDate, company, queue) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  /**
   * TODO: Add logic to url for endDate to add + 1 day, so users can type "2021-09-16 to 2021-09-16"
   */

  useEffect(() => {
    setLoading("Henter data...");
    setData(null);
    setError(null);
    const URL = process.env.REACT_APP_API_URL_QUEUE;
    const response = axios(
      `${URL}/v2/${statType}?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queue}`,
      {
        auth: {
          username: process.env.REACT_APP_API_USERNAME,
          password: process.env.REACT_APP_API_PASSWORD,
        },
      }
    )
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
  }, [statType, startDate, endDate, company, queue]);

  return { data, loading, error };
}

export default useFetch;
