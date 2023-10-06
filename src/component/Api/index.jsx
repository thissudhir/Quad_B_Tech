import axios from "axios";

const baseUrl = "https://jsearch.p.rapidapi.com"; // Define the base URL

const defaultOptions = {
  headers: {
    "X-RapidAPI-Key": "16298e9fdfmsh868ce7f98d5f407p171d60jsn748e1134ec11",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

// Define your API call function
export const fetchJobListings = async (query, page = 1, numPages = 1) => {
  try {
    const response = await axios.get(`${baseUrl}/search`, {
      params: {
        query,
        page,
        num_pages: numPages,
      },
      ...defaultOptions,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the component making the API call
  }
};
