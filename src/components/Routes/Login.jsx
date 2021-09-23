import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import AuthContext from "../../Context/authContext";

const Login = () => {
  const {
    userEmail,
    userPassword,
    setIsLoggedIn,
    setUserEmail,
    setUserPassword,
    setError,
  } = useContext(AuthContext);

  const loginUser = async () => {
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: userEmail,
        password: userPassword,
      },
    };

    try {
      const response = await axios(
        `${API_URL}/v2/Period?startDate=2100-01-01&endDate=2100-01-01`,
        options
      );

      setIsLoggedIn(true);
      setError(null);
      return response.data;
    } catch (error) {
      setIsLoggedIn(false);
      setUserEmail("");
      setUserPassword("");
      setError("Noget gik galt, kontakt ipnordic");
      return error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 0.5, width: "20ch" },
      }}
    >
      <TextField
        required
        label="Email"
        sx={{ mb: 0.8 }}
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
      />
      <TextField
        required
        label="Password"
        type="password"
        sx={{ mb: 0.8 }}
        onChange={(e) => setUserPassword(e.target.value)}
        value={userPassword}
      />
      <Button
        variant="contained"
        sx={{ p: 1, mt: 1.2 }}
        type="submit"
        size="large"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
