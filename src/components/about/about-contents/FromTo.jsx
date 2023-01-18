import "./from-to.css";

function FromTo() {
  return (
    <div className="from-to-container">
      <h3 style={{ textAlign: "center" }}>
        <span>Timeline</span>
      </h3>
      <div className="edu-exp-container">
        <div className="edu-container">
          <div className="edu">
            <h3>edu</h3>
            <h3>edu</h3>
            <h3>edu</h3>
            <h3>edu</h3>
          </div>
        </div>
        <div className="line"></div>
        <div className="exp-container">
          <div className="exp">
            <h3>exp</h3>
            <h3>exp</h3>
            <h3>exp</h3>
            <h3>exp</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromTo;
