import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Success from "./Success"; // Import the Success component

const Application = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your server or perform other actions.

    // Set the submitted state to true to show the success page
    setSubmitted(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "84vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {submitted ? (
        // Show the Success component when the form is submitted
        <Success formData={formData} />
      ) : (
        // Show the form when not submitted
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Apply for the Job
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Cover Letter"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
              />
              <Box my={2}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Application;
