import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import { fetchJobListings } from "../component/Api/index";

const Landing = () => {
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setProgrammingLanguage(event.target.value);
  };

  const handleSearch = async () => {
    if (programmingLanguage.trim() === "") {
      return;
    }

    try {
      setLoading(true);
      // Call the fetchJobListings function from api.js
      const data = await fetchJobListings(
        `developer in ${programmingLanguage}`
      );
      setJobListings(data.data); // Assuming data is structured similar to your previous response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "86.1vh", // Set the height to 100vh to occupy the whole viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        Job Search
      </Typography>
      <TextField
        label="Enter a programming language"
        variant="outlined"
        fullWidth
        margin="normal"
        value={programmingLanguage}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSearch}
      >
        Search
      </Button>

      {loading ? ( // Check if loading is true, display loading message
        <Typography variant="p" align="center">
          Loading, please wait...
        </Typography>
      ) : (
        jobListings.length > 0 && (
          <>
            <Box marginTop={"20px"}>
              <Typography variant="h5" align="center" gutterBottom>
                Job Listings for {programmingLanguage}
              </Typography>
            </Box>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {jobListings.map((job) => (
                <Card
                  key={job.job_publisher}
                  variant="outlined"
                  style={{ width: "30%", margin: "10px" }}
                >
                  <CardContent>
                    <Typography variant="h5">{job.employer_name}</Typography>
                    <Typography variant="h6" color={"lightgray"}>
                      {job.job_title}
                    </Typography>
                    {/* Add other job information here */}
                  </CardContent>
                  <CardActions>
                    <Link to={`/jobdescription/${job.job_id}`}>
                      <Button size="small">Apply now</Button>
                    </Link>
                  </CardActions>
                </Card>
              ))}
            </div>
          </>
        )
      )}
    </Container>
  );
};

export default Landing;
