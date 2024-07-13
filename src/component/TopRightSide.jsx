export default function TopRightSide({ onhandleShowPopup }) {
  return (
    <div>
      <h2>Lending and borrowing</h2>
      <p className="asset">Asset to Lend</p>
      <div className="right-side">
        <div className="lending active" onClick={onhandleShowPopup}>
          <div className="lending-text">
            <img alt="" src="./assets/up arrow.svg" />
            <p>Lending</p>
          </div>
        </div>

        <div className="borrowing" onClick={onhandleShowPopup}>
          <div className="borrowing-text">
            <img alt="" src="./assets/down arrow 2.svg" />
            <p>Borrowing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
