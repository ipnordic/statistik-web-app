import { useContext } from "react";
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
import CustomContext from "../Context/CustomContext";
import Login from "./Routes/Login";

const Agent = () => {
  const {
    apiStatistics,
    setApiData,
    setApiStatistics,
    queueNumber,
    setLoading,
    setQueueNumber,
    setStartDate,
    setEndDate,
    loading,
    startDate,
    endDate,
    isLoggedIn,
    error,
    setError,
    userEmail,
    company,
    setCompany,
  } = useContext(CustomContext);

  const { fetchData } = useFetchAPI();

  const typeSelect = [{ value: "Period", label: "Period" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setError(null);
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
      {isLoggedIn ? (
        <Box
          onSubmit={handleSubmit}
          component="form"
          autoComplete="on"
          sx={{
            "& .MuiTextField-root": { m: 0.5, width: "30ch" },
          }}
        >
          <TextField
            select
            size="small"
            required
            variant="filled"
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
          {userEmail.includes("@ipnordic.dk") ? (
            <TextField
              type="text"
              size="small"
              variant="filled"
              value={company}
              label="Kundenummer"
              helperText="Blankt for egen ipnordic"
              onChange={(e) => {
                setLoading(null);
                setCompany(e.target.value);
              }}
            />
          ) : (
            ""
          )}
          {apiStatistics === "Period" ? (
            <TextField
              type="text"
              size="small"
              variant="filled"
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
              variant="filled"
              value={queueNumber}
              label="Kønummer"
              onChange={(e) => setQueueNumber(e.target.value)}
            />
          )}

          <TextField
            type="text"
            required
            size="small"
            variant="filled"
            value={startDate}
            label="Start dato"
            helperText="YYYY-MM-DD"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            type="text"
            required
            size="small"
            variant="filled"
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
            sx={{ m: 0.8 }}
          >
            Søg
          </LoadingButton>
        </Box>
      ) : (
        <Login />
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {apiStatistics === "Agent" ? (
        <AgentForm />
      ) : apiStatistics === "Period" ? (
        <Period />
      ) : apiStatistics === "AgentByDay" ? (
        <AgentByDay />
      ) : apiStatistics === "Daily" ? (
        <Daily />
      ) : (
        ""
      )}
    </>
  );
};

export default Agent;
