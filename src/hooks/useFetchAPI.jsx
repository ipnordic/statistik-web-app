import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Context/authContext";

const useFetchAPI = () => {
  const {
    apiStatistics,
    startDate,
    endDate,
    queueNumber,
    setApiData,
    setLoading,
    setError,
    userEmail,
    userPassword,
  } = useContext(AuthContext);

  const fetchData = async () => {
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: userEmail,
        password: userPassword,
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
    } catch (error) {
      setLoading(false);
      setError(`Noget gik galt, kontakt ipnordic.`);
    }
  };

  return { fetchData };
};

export default useFetchAPI;
