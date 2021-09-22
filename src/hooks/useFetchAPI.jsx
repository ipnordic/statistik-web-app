import axios from "axios";
import { useState } from "react";

const useFetchAPI = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiStatistics, setApiStatistics] = useState("");
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

    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;

    const response = await axios(
      `${API_URL}/v2/${apiStatistics}?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queueNumber}`,
      options
    )
      .then((response) => {
        if (response.statusText !== "OK") {
          throw new Error("Der opstod en fejl...");
        }
        setLoading(false);
        response.data && setApiData(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(`${err.message} - Noget gik galt, kontakt ipnordic.`);
      });
    return response;
  };

  return {
    fetchData,
    apiData,
    loading,
    error,
    apiStatistics,
    startDate,
    endDate,
    company,
    queueNumber,
    setApiStatistics,
    setStartDate,
    setEndDate,
    setCompany,
    setQueueNumber,
    setApiData,
    setLoading,
  };
};

export default useFetchAPI;
