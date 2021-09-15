import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [status, setStatus] = useState("Henter data....");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("2021-09-6", "2021-09-10", "1500");
  }, []);

  const fetchData = async (startDate, endDate, queue) => {
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
    <>
      <h1>ipnordic Statistik</h1>
      {status && <p>{status}</p>}
      <Form />
      <Table data={data} />
    </>
  );
}

export default App;
