export default function LeftSide() {
  return (
    <div className="leftSide">
      <a href="home" className="margin-set-logo">
        <img src="./assets/apple.svg" alt="polfund logo" />
        Polfund
      </a>

      <div className="user-profile">
        <div className="user-profile-image">
          <img src="./assets/Group 10.svg" className="user-image" alt="" />
        </div>
        <p>NFT lord crypto844.sol</p>
        <img src="./assets/down arrow.svg" id="downArrow" alt="" />
      </div>

      <div id="user-profile-links" className="margin-set">
        <a href="links" className="profile-links">
          <img src="./assets/House.svg" alt="Dashboard icon" />
          Dashboard
        </a>
        <a href="links" className="profile-links">
          <img src="./assets/users.svg" alt="crowd fund icon" />
          Crowd fund
        </a>
        <a href="links" className="profile-links">
          <img src="./assets/Internet.svg" alt="Campaign icon" />
          Campaign
        </a>
        <a href="links" className="profile-links">
          <img src="./assets/Reload.svg" alt="Swap icon" />
          Swap
        </a>
      </div>
    </div>
  );
}
