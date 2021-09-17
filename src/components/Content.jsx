import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import useFetchAPI from "../hooks/useFetchAPI";
import Period from "./Queue/PeriodForm";
import AgentForm from "./Queue/AgentForm";
import Alert from "@mui/material/Alert";

const Agent = () => {
  const {
    data,
    loading,
    error,
    setData,
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
    fetchData();
  };

  const handleClick = () => {
    if (type.length <= 0) {
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
          value={type}
          label="Vælg"
          onChange={(e) => {
            setData(null);
            setType(e.target.value);
          }}
        >
          {typeSelect.map((option) => (
            <MenuItem key={Math.random()} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {type === "Period" ? (
          <TextField
            type="text"
            size="small"
            variant="outlined"
            value={queueNumber}
            label="Kønummer"
            helperText="Blankt for alle køer"
            onChange={(e) => setQueueNumber(e.target.value)}
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
        >
          Submit
        </LoadingButton>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      {type === "Agent" ? (
        <AgentForm data={data} />
      ) : type === "Period" ? (
        <Period data={data} />
      ) : (
        ""
      )}
    </>
  );
};

export default Agent;
