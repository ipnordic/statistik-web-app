import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "../Styles/AgentForm.module.css";

const AgentDetails = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(null);
  let { queueId } = useParams();
  const history = useHistory();

  useEffect(() => {
    setLoading("Henter data...");
    const fetchAgentData = async () => {
      const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
      const options = {
        auth: {
          username: process.env.REACT_APP_API_USERNAME,
          password: process.env.REACT_APP_API_PASSWORD,
        },
      };
      try {
        const response = await axios(
          `${API_URL}/v2/Agent?startDate=2021-09-21&endDate=2021-09-22&queue=${queueId}`,
          options
        );
        response.data && setApiData(response.data);
        setLoading(null);
      } catch (error) {
        setLoading(null);
        console.log(error.response);
      }
    };
    fetchAgentData();
  }, [queueId]);

  return (
    <div className={styles.table}>
      {loading && <p>{loading}</p>}

      {apiData && (
        <>
          <Button
            variant="contained"
            onClick={() => history.goBack()}
            sx={{ mb: 1 }}
          >
            Tilbage
          </Button>
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
        </>
      )}
    </div>
  );
};

export default AgentDetails;
