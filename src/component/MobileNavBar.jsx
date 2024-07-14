export default function MobileNavBar() {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-icon">
        <img alt="" src="./assets/Solid/house user.svg" />
        <img alt="" src="./assets/Users/users.svg" />
      </div>

      <w3m-button balance="hide" />
      {/* <img alt="" className="navbar-user" src="./assets/Ellipse 35.svg" /> */}

      <div className="mobile-navbar-icon2">
        <img alt="" src="./assets/User Interface/Internet.svg" />
        <img alt="" src="./assets/Arrows/Connection.svg" />
      </div>
    </div>
  );
}
