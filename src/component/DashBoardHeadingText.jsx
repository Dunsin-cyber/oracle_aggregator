import { useState } from "react";

export default function DashBoardHeadingText() {
  const [assetMenu, setAssetMenu] = useState(false);

  function togggleAssetMenu(e) {
    e.preventDefault();
    setAssetMenu(!assetMenu);
  }
  return (
    <div className="dashboard-heading-text">
      <div className="heading-text">
        <a href="text" className="first-heading-text">
          Assets
          <img
            alt=""
            className="asset-menu-icon"
            id="transAnime"
            src="./assets/down arrow.svg"
            onClick={togggleAssetMenu}
          />
          {assetMenu && (
            <div className="asset-icon-inner" id="assetIconInner">
              <div className="asset-icon-text" id="first-asset-icon-text">
                <div id="hoverStyle">
                  <img
                    alt=""
                    src="./assets/javascript asset/User Interface/Vector.svg"
                  />
                  <p>Crypto</p>
                </div>
              </div>
              <div className="asset-icon-text">
                <div id="hoverStyle">
                  <img
                    alt=""
                    src="./assets/javascript asset/Arrows/Vector.svg"
                  />
                  <p>NFT</p>
                </div>
              </div>
              <div className="asset-icon-text">
                <div id="hoverStyle">
                  <img
                    alt=""
                    src="./assets/javascript asset/Arrows/Vector-1.svg"
                  />
                  <p>Digital asset</p>
                </div>
              </div>
            </div>
          )}
        </a>

        <a href="text">Balance</a>
        <a href="text" className="third-heading-text">
          Type
        </a>
      </div>

      <div className="heading-text-break">
        <hr />
        <p>Lending history</p>
      </div>
    </div>
  );
}
