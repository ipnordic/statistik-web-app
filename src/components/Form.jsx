import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import CustomContext from "../Context/CustomContext";
import useFetchAPI from "../hooks/useFetchAPI";
import { Alert, AlertTitle } from "@mui/material";

const Form = () => {
  const {
    apiStatistics,
    startDate,
    endDate,
    setApiStatistics,
    userEmail,
    company,
    loading,
    setCompany,
    queueNumber,
    setQueueNumber,
    setStartDate,
    setEndDate,
    setError,
    error,
  } = useContext(CustomContext);
  const { fetchData } = useFetchAPI();

  const typeSelect = [{ value: "Period", label: "Period" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setError(null);
  };

  return (
    <>
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
            helperText="Blankt for ipnordic"
            onChange={(e) => {
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

        {endDate && endDate.includes(startDate) ? (
          <LoadingButton
            disabled
            size="large"
            variant="contained"
            sx={{ m: 0.8 }}
          >
            Søg
          </LoadingButton>
        ) : endDate < startDate ? (
          <LoadingButton
            disabled
            size="large"
            variant="contained"
            sx={{ m: 0.8 }}
          >
            Søg
          </LoadingButton>
        ) : (
          <LoadingButton
            type="submit"
            size="large"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={{ m: 0.8 }}
          >
            Søg
          </LoadingButton>
        )}
      </Box>
      {error && <Alert severity="error">{error}</Alert>}

      {endDate && endDate.includes(startDate) ? (
        <Alert severity="warning">
          <AlertTitle>Info</AlertTitle>
          <strong>Slut datoen</strong> skal være minimum én dag foran{" "}
          <strong>Start datoen!</strong>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
