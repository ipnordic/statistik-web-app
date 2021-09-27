import React, { useState } from "react";

const CustomContext = React.createContext({
  isLoggedIn: false,
  userEmail: "",
  userPassword: "",
  apiData: null,
  loading: false,
  error: null,
  apiStatistics: "",
  startDate: "",
  endDate: "",
  queueNumber: "",
});

export const CustomContextProvider = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiStatistics, setApiStatistics] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [queueNumber, setQueueNumber] = useState("");

  return (
    <CustomContext.Provider
      value={{
        userEmail,
        userPassword,
        setUserEmail,
        setUserPassword,
        isLoggedIn,
        setIsLoggedIn,
        apiData,
        loading,
        error,
        apiStatistics,
        startDate,
        endDate,
        queueNumber,
        setApiData,
        setLoading,
        setError,
        setApiStatistics,
        setStartDate,
        setEndDate,
        setQueueNumber,
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
};

export default CustomContext;
