# AZDeals-Domain

AZDeals-Domain is a Node.js-based microservice responsible for fetching real-time Amazon deals based on a specified country code. It serves as the backend for the BFF (Backend for Frontend) layer, handling external API calls and returning the deal data in a structured format.

## Features

- Fetches Amazon deals based on the provided country code.
- Isolated microservice focused on retrieving external data for specific regions.
- Works as a backend service for the BFF layer, enabling tailored data to be passed to frontend applications.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/AZDeals-domain.git
   cd AZDeals-domain
   ```

2. **Install the dependencies**:
   Run the following command to install the project dependencies.

   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a .env file in the root of the project with the following variables:

   ```bash
   RAPIDAPI_KEY=your-rapidapi-key
   ```

4. **Run the service**:
   Use the following command to start the dev server.
   ```bash
   yarn dev
   ```

## Configuration

Before running the application, ensure the following configuration is set in your `.env` file:

- `RAPIDAPI_KEY`: Your API key for accessing the real-time Amazon deals via RapidAPI. You can get this by signing up for an account on [RapidAPI](https://rapidapi.com/).

Example `.env` file:

```
RAPIDAPI_KEY=your-rapidapi-key
```

## Usage

Once the service is running, it listens on port `3000` (by default). The API can be accessed via the defined endpoints.

Example request to fetch deals for Australia (country code: `AU`):

```bash
GET http://localhost:3000/getDeals/AU
```

## API Endpoints

### `GET /getDeals/:countryCode`

Fetches Amazon deals for a specific country.

- **Path Parameter**:
  - `:countryCode` - The country code for which you want to fetch deals (e.g., `AU` for Australia, `US` for the United States).
- **Response**:
  Returns a JSON object containing Amazon deals for the given country.

Example response:

```json
{
  "status": "OK",
  "data": {
    "deals": [
      {
        "deal_title": "Shark FlexStyle Limited Edition",
        "deal_photo": "https://m.media-amazon.com/images/I/71a8S7ARpdL.jpg",
        "deal_url": "https://www.amazon.com.au/Shark-FlexStyle/dp/B0CKW59L1Y"
      },
      {
        "deal_title": "FOREO Luna 4 Body Scrubber",
        "deal_photo": "https://m.media-amazon.com/images/I/81R2C9JjEQL.jpg",
        "deal_url": "https://www.amazon.com.au/FOREO-Body-Scrubber/dp/B0BGL9PQVL"
      }
    ]
  }
}
```

## Development

### Running the server locally

To start the server locally, use the following command:

```bash
yarn dev
```

The server will automatically reload upon code changes during development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
