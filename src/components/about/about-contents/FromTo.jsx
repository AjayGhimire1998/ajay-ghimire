import "./from-to.css";
import { HiAcademicCap } from "react-icons/hi";
import { CgWorkAlt } from "react-icons/cg";
import { useEffect, useState } from "react";

function FromTo({ edu, exp, shadow }) {
  const [timelineHeight, setTimelineHeight] = useState(0);

  const years = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const marginCalc = (item) => {
    let margin = 0;
    let marginYear = timelineHeight / years.length;
    let marginMonth = marginYear / months.length;

    margin =
      marginYear * years.indexOf(item.startTime.slice(4)) +
      marginMonth * months.indexOf(item.startTime.slice(0, 3));
    return margin;
  };

  useEffect(() => {
    setTimelineHeight(document.querySelector(".line").offsetHeight);
    console.log(document.querySelector(".line").offsetHeight);
  }, []);

  return (
    <div className="from-to-container">
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          Timeline
        </span>
      </h3>
      <br />
      <div className="edu-exp-container">
        <div className="edu-container">
          <div className="edu">
            <HiAcademicCap size="30px" />
            {edu.map((ed, index) => (
              <div
                className="edu-item"
                key={index}
                style={{ marginTop: marginCalc(ed)  }}
              >
                <p style={{ color: "white", marginRight: "-100%" }}>-&rarr;</p>
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
        </div>
        <div className="line"></div>
        <div className="edu-container">
          <div className="edu">
            <CgWorkAlt size="30px" />
            {exp.map((ex, index) => (
              <div
                className="exp-item"
                key={index}
                style={{ marginTop: marginCalc(ex) }}
              >
                <p
                  style={{ color: "white", marginLeft: "-100%", height: "0px" }}
                >
                  &larr;-
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
        </div>
      </div>
      <br />
    </div>
  );
}

export default FromTo;
