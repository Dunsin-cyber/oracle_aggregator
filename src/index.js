import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import { config } from "./utils/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "./utils/web3modal";

const root = ReactDOM.createRoot(
  document.getElementById("root") /* as HTMLElement */
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Router>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </Router>
  </React.StrictMode>
);
