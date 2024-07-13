export default function PopupContainer({ onDeletePopup }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-first-section">
          <p id="lend">Lend</p>
          <img
            alt=""
            id="cancelBtn"
            src="./popup asset/Cancel.svg"
            onClick={onDeletePopup}
          />
        </div>
        <div className="popup-second-section">
          <div className="second-section-1">
            <p className="crypto-text">Crypto</p>
            <p className="token-amount">406.777</p>
          </div>
          <div className="second-section-2">
            <div className="second-section-1a">
              <img alt="" src="./popup asset/Ellipse 12.svg" />
              <p>DOT</p>
            </div>
            <p id="enterLendingAmount">Enter Lending amount</p>
          </div>
        </div>
        <button id="popupBtn">Confirm</button>
      </div>
    </div>
  );
}
