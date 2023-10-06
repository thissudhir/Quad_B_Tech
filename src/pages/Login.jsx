import React, { useEffect, useRef } from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiHost = import.meta.env.VITE_REACT_APP_API_HOST;

  console.log("Base URL:", baseUrl);
  console.log("API Key:", apiKey);
  console.log("API Host:", apiHost);

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if login data is present in localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      // If data is present, automatically fill the login form
      emailRef.current.value = storedEmail;
      passwordRef.current.value = storedPassword;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if email and password match the stored data in localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      // Successful login
      localStorage.setItem("login", email);
      navigate("/home");
    } else {
      // Invalid login
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Link to={"/"}>
          <Typography variant="h4" color={"#1976D2"}>
            Quad B Tech
          </Typography>
        </Link>
        <Typography component="h1" variant="h6">
          Log in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputRef={emailRef}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            inputRef={passwordRef}
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Don't have an account?{" "}
              <Link variant="body2" to={"/register"}>
                Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
