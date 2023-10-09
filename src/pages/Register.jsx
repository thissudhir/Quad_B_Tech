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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("login")) {
  //     console.log("");
  //   }
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    // Check if any of the fields are empty
    if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all fields");
      return; // Stop further processing
    }

    // Check if the email already exists in localStorage
    const existingEmail = localStorage.getItem("email");
    if (existingEmail === email) {
      alert("An account with this email already exists");
      return; // Stop further processing
    }

    // If all checks pass, proceed to register the user
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("login", email);
    alert("Account created successfully");
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          // marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "86.1vh",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar> */}
        <Link to={"/"}>
          <Typography variant="h4" color={"#1976D2"}>
            Quad B Tech
          </Typography>
        </Link>
        <Typography component="h1" variant="h6">
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                inputRef={firstNameRef}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                inputRef={lastNameRef}
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                inputRef={emailRef}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                inputRef={passwordRef}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?{" "}
              <Link to={"/"} variant="body2">
                Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
};

export default Register;
