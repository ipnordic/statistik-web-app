import React, { useState } from "react";
// import useFetchAPI from "../../hooks/useFetchAPI";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
import axios from "axios";

const Login = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  // const { fetchData } = useFetchAPI();
  const history = useHistory();

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
      console.log(response.data);
      const testObj = { email: "", password: "" };
      localStorage.setItem("testObj", JSON.stringify(testObj));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser();

    history.push("/statistik");
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
