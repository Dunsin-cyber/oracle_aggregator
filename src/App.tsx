// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from "wagmi";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const account = useAccount();
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/aggragator");
  }, [account]);
  console.log(account);
  if (account === undefined) {
    navigate("/");
  }
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />
        <Route path="aggragator" element={<LandingPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
