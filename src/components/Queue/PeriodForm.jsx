import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./PeriodForm.module.css";

const Period = ({ data }) => {
  return (
    <div className={styles.table}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item) => (
                <TableRow className={styles.tableHover} key={Math.random()}>
                  <TableCell>{item.QueueName}</TableCell>
                  <TableCell>{item.QueueExtension}</TableCell>
                  <TableCell>{item.Calls}</TableCell>
                  <TableCell>{item.AnsweredCalls}</TableCell>
                  <TableCell>{item.Transfers}</TableCell>
                  <TableCell>{item.Abandoned}</TableCell>
                  <TableCell>{item.AverageCalltime}</TableCell>
                  <TableCell>{item.AverageHoldtime}</TableCell>
                  <TableCell>{item.MaxHoldtime}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Period;
