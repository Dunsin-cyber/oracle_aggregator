# Oracle Aggregator for DeFi Application

This repository contains the code for an Oracle Aggregator designed for a DeFi application. The aggregator fetches price feeds from at least two different oracle sources, calculates an average, and displays it on the frontend. This project uses the new Pyth oracle model as required.

## Features

- **Oracle Integration**: Fetch price feeds from at least two different oracle providers.
- **Data Aggregation**: Compute the average of the fetched price feeds.
- **Frontend Display**: Present the aggregated data on the UI.
- **Deployment**: Easily deploy the application on Cloudflare or Vercel.

## Requirements

- Node.js
- Yarn or npm
- Solidity
- Foundry

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Dunsin-cyber/oracle_aggregator.git
cd oracle_aggregator
```

1. **Install Dependecies:**

   ```
    yarn install

   ```

### Build and Deploy the Aggregator

Frontend
Build the Frontend:

```bash
yarn build
```

or

```bash
npm run build
```

### Deploy the Frontend:

Deploy the build folder to Cloudflare or Vercel.

Running the Development Server
To run the development server locally:

```bash
yarn start
```

or

```bash
npm start
```

### Using the Aggregator

Fetch Price Feeds:

The aggregator fetches price feeds from the specified oracle endpoints.

### Calculate Average Price:

The fetched price feeds are aggregated to compute the average price.

### Display Data on Frontend:

The aggregated data is displayed on the frontend UI.
