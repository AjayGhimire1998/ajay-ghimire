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
            <div className="edu-item">
              <div className="edu-contents">
                <div className="edu-desc">
                  <h4>School</h4>
                  <p>School Adrress</p>
                  <span>Course</span>
                </div>
                <div className="edu-time">
                  <span>Feb 2022 - Jul 2022</span>
                </div>
              </div>
            </div>
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
