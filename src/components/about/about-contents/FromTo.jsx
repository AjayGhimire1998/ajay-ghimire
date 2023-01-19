import "./from-to.css";
import { HiAcademicCap } from "react-icons/hi";
import { CgWorkAlt } from "react-icons/cg";

function FromTo({ edu, exp }) {
  return (
    <div className="from-to-container">
      <h3 style={{ textAlign: "center" }}>
        <span>Timeline</span>
      </h3>
      <br/>
      <div className="edu-exp-container">
        <div className="edu-container">
          <div className="edu">
            <HiAcademicCap size="30px" />
            {edu.map((ed, index) => (
              <div className="edu-item" key={index}>
                <div className="edu-contents">
                  <div className="edu-desc">
                    <h4>{ed.school}</h4>
                    <p>{ed.address}</p>
                    <span>{ed.course}</span>
                  </div>
                  <div className="edu-time">
                    <span>{ed.startTime} - {ed.endTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="edu-container">
          <div className="edu">
            <CgWorkAlt size="30px" />
            {exp.map((ex, index) => (
              <div className="edu-item" key={index}>
                <div className="edu-contents">
                  <div className="edu-desc">
                    <h4>{ex.company}</h4>
                    <p>{ex.address}</p>
                    <span>{ex.jobTitle}</span>
                  </div>
                  <div className="edu-time">
                  <span>{ex.startTime} - {ex.endTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default FromTo;
