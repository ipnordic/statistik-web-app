import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../Styles/PeriodForm.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CustomContext from "../../Context/CustomContext";
import { Button } from "@mui/material";
import Chart from "../Chart";
import {
  totalCalls,
  totalAnsweredCalls,
  totalTransfers,
  totalAbandoned,
} from "../../helpers/calcTotal";

const Period = () => {
  const { apiData, setApiData, queueNumber } = useContext(CustomContext);

  const tableTotalCalls = totalCalls(apiData);
  const tableTotalAnsweredCalls = totalAnsweredCalls(apiData);
  const tableTotalTransfers = totalTransfers(apiData);
  const tableTotalAbandoned = totalAbandoned(apiData);

  return (
    <div className={styles.table}>
      {apiData && (
        <>
          {queueNumber === "" ? <Chart /> : ""}
          {apiData.length > 0 ? (
            <Paper elevation={8}>
              <TableContainer sx={{ width: "100%" }}>
                <Table aria-label="queue data table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Kønavn</TableCell>
                      <TableCell>Kønummer</TableCell>
                      <TableCell>Antal kald</TableCell>
                      <TableCell>Besvaret</TableCell>
                      <TableCell>Omstillet</TableCell>
                      <TableCell>Frafald</TableCell>
                      <TableCell>Gns. Samtaletid</TableCell>
                      <TableCell>Gns. Ventetid</TableCell>
                      <TableCell>Længste ventetid</TableCell>
                      <TableCell>Information</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {apiData &&
                      apiData
                        .sort((a, b) => {
                          return b.Calls - a.Calls;
                        })
                        .map((item) => (
                          <TableRow
                            className={styles.tableHover}
                            key={Math.random()}
                          >
                            <TableCell>{item.QueueName}</TableCell>
                            <TableCell>{item.QueueExtension}</TableCell>
                            <TableCell>{item.Calls}</TableCell>
                            <TableCell>{item.AnsweredCalls}</TableCell>
                            <TableCell>{item.Transfers}</TableCell>
                            <TableCell>{item.Abandoned}</TableCell>
                            <TableCell>{item.AverageCalltime}</TableCell>
                            <TableCell>{item.AverageHoldtime}</TableCell>
                            <TableCell>{item.MaxHoldtime}</TableCell>
                            <TableCell>
                              <Link
                                to={`/statistik/detaljer/${item.QueueExtension}`}
                              >
                                <Button
                                  size="small"
                                  variant="contained"
                                  onClick={() => {
                                    setApiData(null);
                                  }}
                                >
                                  Se mere
                                </Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                    {queueNumber === "" ? (
                      <TableRow>
                        <TableCell>
                          <strong>Total</strong>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <strong>{tableTotalCalls}</strong>
                        </TableCell>
                        <TableCell>
                          <strong>{tableTotalAnsweredCalls}</strong>
                        </TableCell>
                        <TableCell>
                          <strong>{tableTotalTransfers}</strong>
                        </TableCell>
                        <TableCell>
                          <strong>{tableTotalAbandoned}</strong>
                        </TableCell>
                      </TableRow>
                    ) : (
                      ""
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Period;
