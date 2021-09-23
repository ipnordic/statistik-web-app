import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Routes/Home";
import Content from "./components/Content";
import Login from "./components/Routes/Login";
import AgentDetails from "./components/Routes/AgentDetails";
import "@fontsource/roboto/400.css";
import AuthContext from "./Context/authContext";
import { useState } from "react";

function App() {
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
    <AuthContext.Provider
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
      <div className={styles.Container}>
        <Router>
          <Header />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/statistik" component={Content} exact />
            <Route path="/login" component={Login} />
            <Route
              path="/statistik/queuedetails/:queueId"
              component={AgentDetails}
            />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
