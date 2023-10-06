import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const Success = ({ formData }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "86.1vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Application Submitted Successfully
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Name: {formData.name}</Typography>
          <Typography variant="h6">Email: {formData.email}</Typography>
          <Typography variant="h6">Cover Letter:</Typography>
          <Typography variant="body1">{formData.coverLetter}</Typography>
          {/* You can add more fields as needed */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Success;
