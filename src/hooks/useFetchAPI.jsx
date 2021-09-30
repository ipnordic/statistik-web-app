import axios from "axios";
import { useContext } from "react";
import CustomContext from "../Context/CustomContext";

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
    company,
  } = useContext(CustomContext);

  // function setCharAt(str, index, chr) {
  //   if (index > str.length - 1) return str;
  //   return str.substring(0, index) + chr + str.substring(index + 1);
  // }

  // String.prototype.setCharAt = setCharAt;
  // const toNumber = (number) => {
  //   let sliceNum = number.slice(8, 10);
  //   let convertToNumber = Number(sliceNum);
  //   let increaseNumByOne = convertToNumber + 1;
  //   const convertToString = increaseNumByOne.toString();

  //   const replaceNum = number.setCharAt(number, 8, convertToString);
  //   console.log(replaceNum);
  // };
  // toNumber(startDate);
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
        `${API_URL}/v2/${apiStatistics}?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queueNumber}`,
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
