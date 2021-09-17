import styles from "../Table.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import useFetchAPI from "../../hooks/useFetchAPI";

const Agent = () => {
  const {
    data,
    loading,
    error,
    type,
    queueNumber,
    startDate,
    endDate,
    setType,
    setStartDate,
    setEndDate,
    setQueueNumber,
    setLoading,
    fetchData,
  } = useFetchAPI();

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
          value={queueNumber}
          label="Kønummer"
          onChange={(e) => setQueueNumber(e.target.value)}
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
