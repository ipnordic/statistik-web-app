import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Styles/AgentForm.module.css";

const AgentDetails = ({ match }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetchAgentData();
  }, []);

  console.log(match);

  const fetchAgentData = async () => {
    setLoading("Henter data...");
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    };
    try {
      const response = await axios(
        `${API_URL}/v2/Agent?startDate=2021-09-21&endDate=2021-09-22&queue=${match.params.id}`,
        options
      );
      response.data && setApiData(response.data);
      setLoading(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.table}>
      {loading && <p>{loading}</p>}
      {apiData && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="queue data table">
            <TableHead>
              <TableRow>
                <TableCell>Navn</TableCell>
                <TableCell>Lokalnummer</TableCell>
                <TableCell>Kald Besvaret</TableCell>
                <TableCell>Gns. Samtaletid</TableCell>
                <TableCell>Kald Omstillet</TableCell>
                <TableCell>DND Tid (dagligt)</TableCell>
                <TableCell>Pause Tid (dagligt)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData &&
                apiData.map((item) => (
                  <TableRow className={styles.tableHover} key={item.Agent}>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>{item.Agent}</TableCell>
                    <TableCell>{item.Calls}</TableCell>
                    <TableCell>{item.AverageCalltime}</TableCell>
                    <TableCell>{item.Transfers}</TableCell>
                    <TableCell>{item.DND}</TableCell>
                    <TableCell>{item.Pause}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default AgentDetails;
