// Import necessary modules
import express, { Request, Response } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv"; // To load .env variables
dotenv.config();

// Create an express application
const app = express();

// Define the API endpoint with dynamic country code
app.get("/getDeals/:countryCode", async (req: Request, res: Response) => {

  const { countryCode } = req.params; // Extract countryCode from path params
  const url = `https://real-time-amazon-data.p.rapidapi.com/deals-v2?country=${countryCode}&min_product_star_rating=4&price_range=ALL&discount_range=ALL`;

  const options: any = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY as string, // Use your API key from .env
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    // Fetch data from the API
    const response = await fetch(url, options);
    if (response.ok) {
      const result: any = await response.json(); // Parse the result as JSON
      res.json(result); // Send the JSON result to the client
    } else {
      res
        .status(response.status)
        .json({ error: `API error: ${response.statusText}` });
    }
  } catch (error: any) {
    // Handle any errors during the API call
    console.error("Error fetching deals:", error);
    res.status(500).json({ error: "Failed to fetch deals" });
  }
});

// Define a port to run the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});