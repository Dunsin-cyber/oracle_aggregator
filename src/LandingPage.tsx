import React, { useState } from "react";
import LeftSide from "./component/LeftSide";
import TopRightSide from "./component/TopRightSide";
import DashBoardHeadingText from "./component/DashBoardHeadingText";
import DashboardCoinContainer from "./component/DashboardCoinContainer";
import PopupContainer from "./component/PopContainer";
import MobileNavBar from "./component/MobileNavBar";

export default function LandingPage() {
  return (
    <div className="general-container">
      <LeftSide />
      <RightSide />
      <MobileNavBar />
    </div>
  );
}

function RightSide() {
  const [popUp, setPopUp] = useState(false);

  function handleShowPopup() {
    // const togglePopup = !popUp;
    setPopUp(true);
  }

  function deletePopup() {
    setPopUp(false);
  }
  return (
    <div id="rightSide">
      <TopRightSide onhandleShowPopup={handleShowPopup} />
      <DashboardContainer />
      {popUp && <PopupContainer onDeletePopup={deletePopup} />}
    </div>
  );
}

function DashboardContainer() {
  return (
    <div className="dashboard-container">
      <DashBoardHeadingText />
      <DashboardCoinContainer />
    </div>
  );
}
