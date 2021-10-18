import axios from "axios";
import { useContext } from "react";
import CustomContext from "../Context/CustomContext";

const useFetchAPI = () => {
  const {
    startDate,
    endDate,
    queueNumber,
    setApiData,
    setLoading,
    setError,
    userEmail,
    userPassword,
    company,
  } = useContext(CustomContext);

  const fetchData = async () => {
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: userEmail,
        password: userPassword,
      },
    };

    try {
      setLoading("Henter data...");
      const response = await axios(
        `${API_URL}/v2/Period?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queueNumber}`,
        options
      );
      setLoading(false);
      response.data && setApiData(response.data);
    } catch (error) {
      setLoading(false);
      setError(`Noget gik galt, kontakt ipnordic.`);
    }
  };

  return { fetchData };
};

export default useFetchAPI;
