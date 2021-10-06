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
import { Alert, AlertTitle, Button } from "@mui/material";
import Chart from "../Chart";

const Period = () => {
  const { apiData, setApiData } = useContext(CustomContext);

  return (
    <div className={styles.table}>
      {apiData && (
        <>
          {apiData.length > 0 ? <Chart /> : ""}
          {apiData.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="queue data table">
                <TableHead>
                  <TableRow>
                    <TableCell>Kønavn</TableCell>
                    <TableCell>Kønummer</TableCell>
                    <TableCell>Kald</TableCell>
                    <TableCell>Besvaret kald</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              <strong>Slut datoen</strong> skal være minimum én dag foran{" "}
              <strong>Start datoen!</strong>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default Period;
