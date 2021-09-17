import axios from "axios";
import { useState } from "react";
import styles from "../Table.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Agent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [queue, setQueue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");

  const fetchData = async () => {
    const options = {
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    };
    try {
      const response = await axios(
        `https://api-prod01.ipnordic.dk/api/Statistics/Queue/v2/${type}?startDate=${startDate}&endDate=${endDate}&company=2776&queue=${queue}`,
        options
      );

      setLoading(false);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      setError("Noget gik galt...");
    }
  };
  const typeSelect = [
    { value: "Agent", label: "Agent" },
    { value: "Period", label: "Period" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Henter data...");
    fetchData();
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 0.5, width: "20ch" },
        }}
      >
        <TextField
          select
          size="small"
          required
          variant="outlined"
          value={type}
          label="Select"
          onChange={(e) => setType(e.target.value)}
        >
          {typeSelect.map((option) => (
            <MenuItem key={Math.random()} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={queue}
          label="Kønummer"
          onChange={(e) => setQueue(e.target.value)}
        />
        <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={startDate}
          label="Startdato"
          helperText="YYYY-MM-DD"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={endDate}
          label="Slutdato"
          helperText="YYYY-MM-DD"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>

      {/* </form> */}
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && (
        <>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableHeader}>
                <th>Navn</th>
                <th>Lokalnummer</th>
                <th>Kald Besvaret</th>
                <th>Gns. Samtaletid</th>
                <th>Kald Omstillet</th>
                <th>DND Tid (dagligt)</th>
                <th>Pause Tid (dagligt)</th>
              </tr>
              {data &&
                data.map((item) => (
                  <tr className={styles.tableHover} key={item.Agent}>
                    <td className={styles.tdCenter}>{item.Name}</td>
                    <td className={styles.tdCenter}>{item.Agent}</td>
                    <td className={styles.tdCenter}>{item.Calls}</td>
                    <td className={styles.tdCenter}>{item.AverageCalltime}</td>
                    <td className={styles.tdCenter}>{item.Transfers}</td>
                    <td className={styles.tdCenter}>{item.DND}</td>
                    <td className={styles.tdCenter}>{item.Pause}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Agent;
