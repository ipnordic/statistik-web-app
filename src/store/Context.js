import React, { useState } from "react";

const Context = React.createContext({
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
  company: "",
});

export const Provider = ({ children }) => {
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
  const [company, setCompany] = useState("");

  const value = {
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
    company,
    setCompany,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
