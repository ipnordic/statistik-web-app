import axios from "axios";
import { useState } from "react";

const useFetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [queueNumber, setQueueNumber] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const options = {
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    };

    const API_URL = process.env.REACT_APP_API_URL_QUEUE;

    const response = await axios(
      `${API_URL}/v2/${type}?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queueNumber}`,
      options
    )
      .then((response) => {
        if (response.statusText !== "OK") {
          throw new Error("Der opstod en fejl...");
        }
        setLoading(false);
        response.data && setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(`${err.message} - Noget gik galt, kontakt supporten.`);
      });
    return response;
  };

  return {
    fetchData,
    data,
    loading,
    error,
    type,
    startDate,
    endDate,
    company,
    queueNumber,
    setType,
    setStartDate,
    setEndDate,
    setCompany,
    setQueueNumber,
    setData,
    setLoading,
  };
};

export default useFetchAPI;
