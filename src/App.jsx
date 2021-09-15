import { useState, useEffect } from "react";
import axios from "axios";
import Period from "./components/Queue/Period";
import "./App.css";
import Agent from "./components/Queue/Agent";

function App() {
  const [status, setStatus] = useState("Henter data....");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("2021-09-15", "2021-09-16");
  }, []);

  const fetchData = async (startDate, endDate, queue = "") => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_URL}Queue/v2/Agent?startDate=${startDate}&endDate=${endDate}&company=2776&queue=${queue}`,
        {
          auth: {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD,
          },
        }
      );
      if (response.statusText !== "OK") {
        throw new Error("Could not fetch data!");
      }
      setData(response.data);
      setStatus("");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setStatus(error.message);
    }
  };

  return (
    <div className="container">
      <h1>ipnordic Statistik</h1>
      {status && <p>{status}</p>}

      {/* <Period data={data} /> */}
      <Agent data={data} />
    </div>
  );
}

export default App;
