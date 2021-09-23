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
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    };

    try {
      setLoading(true);
      const response = await axios(
        `${API_URL}/v2/${apiStatistics}?startDate=${startDate}&endDate=${endDate}&queue=${queueNumber}`,
        options
      );
      setLoading(null);
      response.data && setApiData(response.data);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      setError(`Noget gik galt, kontakt ipnordic.`);
      console.log(error);
    }
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
