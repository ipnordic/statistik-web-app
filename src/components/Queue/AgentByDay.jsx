import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./AgentByDay.module.css";

const AgentByDay = ({ data }) => {
  return (
    <div className={styles.table}>
      {data && <h3>Du ser statistik på kø: {data[0].QueueName}</h3>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="queue data table">
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
              <TableCell>Lokalnummer</TableCell>
              <TableCell>Dato</TableCell>
              <TableCell>Kald Besvaret</TableCell>
              <TableCell>Gns. Samtaletid</TableCell>
              <TableCell>Kald Omstillet</TableCell>
              <TableCell>DND Tid (dagligt)</TableCell>
              <TableCell>Pause Tid (dagligt)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item) => (
                <TableRow className={styles.tableHover} key={Math.random()}>
                  <TableCell>{item.Name}</TableCell>
                  <TableCell>{item.Agent}</TableCell>
                  <TableCell>{item.Date}</TableCell>
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
    </div>
  );
};

export default AgentByDay;
