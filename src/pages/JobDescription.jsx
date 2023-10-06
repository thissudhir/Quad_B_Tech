import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";

const fetchJobDetailsById = async (job_id) => {
  try {
    const response = await axios.get(
      `https://jsearch.p.rapidapi.com/jobdescription/${job_id}`
    );
    return response.data; // Assuming the response contains job details
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const JobDescription = ({ job_id }) => {
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const data = await fetchJobDetailsById(job_id);
        setJobDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobDetails();
  }, [job_id]);

  return (
    <Container maxWidth="md">
      {jobDetails ? (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5">{jobDetails.job_title}</Typography>
            <Typography variant="subtitle1">
              {jobDetails.employer_name}
            </Typography>
            <Typography variant="body1">
              {jobDetails.job_description}
            </Typography>
            {/* Add other job details here */}
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1">Loading job details...</Typography>
      )}
    </Container>
  );
};

export default JobDescription;
