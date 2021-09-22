import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import useFetchAPI from "../hooks/useFetchAPI";
import Period from "./Queue/PeriodForm";
import AgentForm from "./Queue/AgentForm";
import Alert from "@mui/material/Alert";
import AgentByDay from "./Queue/AgentByDay";
import Daily from "./Queue/Daily";

const Agent = () => {
  const obj = localStorage.getItem("testObj");
  console.log(JSON.parse(obj));
  const {
    apiData,
    loading,
    error,
    setApiData,
    apiStatistics,
    queueNumber,
    startDate,
    endDate,
    setApiStatistics,
    setStartDate,
    setEndDate,
    setQueueNumber,
    setLoading,
    fetchData,
  } = useFetchAPI();

  const typeSelect = [
    { value: "Agent", label: "Agent" },
    { value: "Period", label: "Period" },
    { value: "AgentByDay", label: "AgentByDay" },
    { value: "Daily", label: "Daily" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleClick = () => {
    if (apiStatistics.length <= 0) {
      return;
    } else if (queueNumber.length <= 0) {
      return;
    } else if (startDate.length <= 0) {
      return;
    } else if (endDate.length <= 0) {
      return;
    } else {
      setLoading(true);
    }
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
          value={apiStatistics}
          label="Vælg"
          onChange={(e) => {
            setApiData(null);
            setApiStatistics(e.target.value);
          }}
        >
          {typeSelect.map((option) => (
            <MenuItem key={Math.random()} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={company}
          label="Kundenummer"
          onChange={(e) => setCompany(e.target.value)}
        /> */}
        {apiStatistics === "Period" ? (
          <TextField
            type="text"
            size="small"
            variant="outlined"
            value={queueNumber}
            label="Kønummer"
            helperText="Blankt for alle køer"
            onChange={(e) => {
              setLoading(null);
              setQueueNumber(e.target.value);
            }}
          />
        ) : (
          <TextField
            type="text"
            required
            size="small"
            variant="outlined"
            value={queueNumber}
            label="Kønummer"
            onChange={(e) => setQueueNumber(e.target.value)}
          />
        )}

        <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={startDate}
          label="Start dato"
          helperText="YYYY-MM-DD"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          type="text"
          required
          size="small"
          variant="outlined"
          value={endDate}
          label="Slut dato"
          helperText="YYYY-MM-DD"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <LoadingButton
          type="submit"
          size="large"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          sx={{ m: 0.2 }}
        >
          Submit
        </LoadingButton>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      {apiStatistics === "Agent" ? (
        <AgentForm apiData={apiData} />
      ) : apiStatistics === "Period" ? (
        <Period apiData={apiData} />
      ) : apiStatistics === "AgentByDay" ? (
        <AgentByDay apiData={apiData} />
      ) : apiStatistics === "Daily" ? (
        <Daily apiData={apiData} />
      ) : (
        ""
      )}
    </>
  );
};

export default Agent;
