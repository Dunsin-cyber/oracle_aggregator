import { useState } from "react";

export default function DashboardCoinContainer() {
  return (
    <div className="dashboard-coin-container">
      <LeftDashboardCoinContainer />
      <RightDashboardCoinContainer />
    </div>
  );
}

function LeftDashboardCoinContainer() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [menuIcon1, setMenuIcon1] = useState(false);
  const [menuIcon2, setMenuIcon2] = useState(false);
  const [menuIcon3, setMenuIcon3] = useState(false);
  const [menuIcon4, setMenuIcon4] = useState(false);
  const [menuIcon5, setMenuIcon5] = useState(false);
  const [menuIcon6, setMenuIcon6] = useState(false);

  function showMenuIcon(e) {
    e.preventDefault();
    setMenuIcon(!menuIcon);
    setMenuIcon1(false);
    setMenuIcon2(false);
    setMenuIcon3(false);
    setMenuIcon4(false);
    setMenuIcon5(false);
    setMenuIcon6(false);
  }

  function showMenuIcon1(e) {
    e.preventDefault();
    setMenuIcon1(!menuIcon1);
    setMenuIcon2(false);
    setMenuIcon3(false);
    setMenuIcon4(false);
    setMenuIcon5(false);
    setMenuIcon6(false);
  }

  function showMenuIcon2(e) {
    e.preventDefault();
    setMenuIcon2(!menuIcon2);
    setMenuIcon1(false);
    setMenuIcon3(false);
    setMenuIcon4(false);
    setMenuIcon5(false);
    setMenuIcon6(false);
  }

  function showMenuIcon3(e) {
    e.preventDefault();
    setMenuIcon3(!menuIcon3);
    setMenuIcon1(false);
    setMenuIcon2(false);
    setMenuIcon4(false);
    setMenuIcon5(false);
    setMenuIcon6(false);
  }

  function showMenuIcon4(e) {
    e.preventDefault();
    setMenuIcon4(!menuIcon4);
    setMenuIcon1(false);
    setMenuIcon2(false);
    setMenuIcon3(false);
    setMenuIcon5(false);
    setMenuIcon6(false);
  }

  function showMenuIcon5(e) {
    e.preventDefault();
    setMenuIcon5(!menuIcon5);
    setMenuIcon1(false);
    setMenuIcon2(false);
    setMenuIcon3(false);
    setMenuIcon4(false);
    setMenuIcon6(false);
  }

  function showMenuIcon6(e) {
    e.preventDefault();
    setMenuIcon6(!menuIcon6);
    setMenuIcon1(false);
    setMenuIcon2(false);
    setMenuIcon3(false);
    setMenuIcon4(false);
    setMenuIcon5(false);
  }

  return (
    <div id="left-dashboard-coin-container">
      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12.svg" />
          <div className="coin-logo-text">
            <p>BNB</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button>Borrow</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon}
          />
          {menuIcon && <MenuIconInner />}
        </div>
      </div>

      {/* 2 */}

      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12 (1).svg" />
          <div className="coin-logo-text">
            <p>Bitcoin</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button id="fadeBtnBg">Borrow</button>
        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon1}
          />
          {menuIcon1 && <MenuIconInner />}
        </div>
      </div>

      {/* <!-- 3 --> */}

      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12 (2).svg" />
          <div className="coin-logo-text">
            <p>Eth</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button>Borrow</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon2}
          />
          {menuIcon2 && <MenuIconInner />}
        </div>
      </div>

      {/* <!-- 4 --> */}

      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12 (3).svg" />
          <div className="coin-logo-text">
            <p>BNB</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button id="fadeBtnBg">Borrow</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon3}
          />
          {menuIcon3 && <MenuIconInner />}
        </div>
      </div>

      {/* <!-- 5 --> */}

      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12.svg" />
          <div className="coin-logo-text">
            <p>BNB</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button>Borrow</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon4}
          />
          {menuIcon4 && <MenuIconInner />}
        </div>
      </div>

      {/* <!-- 6 --> */}
      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12.svg" />
          <div className="coin-logo-text">
            <p>BNB</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button>Borrow</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon5}
          />
          {menuIcon5 && <MenuIconInner />}
        </div>
      </div>

      {/* <!-- 7 --> */}

      <div className="coin-details">
        <div className="coin-logo">
          <img alt="" src="./assets/Ellipse 12.svg" />
          <div className="coin-logo-text">
            <p>BNB</p>
            <div className="coin-logo-inner-text" id="uniqueColor">
              <p>$132.02</p>
              <div className="unique-color">
                <p>+2.17%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coin-detail-price">
          <p className="token-amount">300.00</p>
          <p className="coin-price">$200.00</p>
        </div>

        <p className="crypto">Crypto</p>

        <button>Supply</button>

        <div id="menuPopupContainer">
          <img
            alt=""
            className="menu-icon"
            src="./assets/menu.svg"
            onClick={showMenuIcon6}
          />
          {menuIcon6 && <MenuIconInner />}
        </div>
      </div>
    </div>
  );
}

function RightCoinDetails() {
  return (
    <div className="right-coin-details">
      <img alt="" src="./assets/Ellipse 11.svg" />
      <div className="right-coin-details-text">
        <p id="dappsText">Daaps Crypto</p>
        <p id="lowerDappsText">You borrowed 66.66 BNB from daaps lord</p>
      </div>
      <div className="last-right-coin-details">
        <p>5 min</p>
      </div>
    </div>
  );
}

function RightDashboardCoinContainer() {
  return (
    <div className="right-dashboard-coin-container">
      <RightCoinDetails />
      <RightCoinDetails />
      <RightCoinDetails />
      <RightCoinDetails />
      <RightCoinDetails />
      <RightCoinDetails />
      <RightCoinDetails />
    </div>
  );
}

function MenuIconInner() {
  return (
    <div className="menu-icon-inner" id="menuIconInner">
      <div className="menu-icon-text">
        <img alt="" src="./assets/javascript asset/User Interface/Vector.svg" />
        <p>All asset</p>
      </div>
      <div className="menu-icon-text">
        <img alt="" src="./assets/javascript asset/Arrows/Vector.svg" />
        <p>Supplied asset</p>
      </div>
      <div className="menu-icon-text">
        <img alt="" src="./assets/javascript asset/Arrows/Vector-1.svg" />
        <p>Digital asset</p>
      </div>
    </div>
  );
}
