import "./from-to.css";
import { HiAcademicCap } from "react-icons/hi";
import { CgWorkAlt } from "react-icons/cg";

function FromTo({ edu, exp }) {
  return (
    <div className="from-to-container">
      <h2 style={{ textAlign: "center" }}>Timeline</h2>
      <br />
      <div className="edu-exp-container">
        <section className="edu-container">
          <div className="edu">
            <HiAcademicCap size="30px" />

            {edu.map((ed, index) => (
              <div
                className="edu-item"
                key={index}
                style={{
                  marginTop: ed.marginTop,
                }}
              >
                <p style={{ color: "white", marginRight: "-105%" }}>&rarr;</p>
                <div className="edu-contents">
                  <div className="edu-desc">
                    <p>
                      <strong>{ed.school}</strong>
                      <br />
                      {ed.address}
                    </p>

                    <span>{ed.course}</span>
                  </div>
                  <div className="edu-time">
                    <span>
                      {ed.startTime} - {ed.endTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="line"></div>
        <section className="edu-container">
          <div className="edu">
            <CgWorkAlt size="30px" />

            {exp.map((ex, index) => (
              <div
                className="exp-item"
                key={index}
                style={{
                  marginTop: ex.marginTop,
                }}
              >
                <p
                  style={{
                    color: "white",
                    marginLeft: "-105%",
                    height: "0px",
                  }}
                >
                  &larr;
                </p>
                <div className="edu-contents">
                  <div className="edu-desc">
                    <p>
                      <strong>{ex.company}</strong>
                      <br />
                      {ex.address}
                    </p>

                    <span>{ex.jobTitle}</span>
                  </div>
                  <div className="edu-time">
                    <span>
                      {ex.startTime} - {ex.endTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <br />
    </div>
  );
}

export default FromTo;
