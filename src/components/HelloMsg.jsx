import React from "react";
import Typewriter from "typewriter-effect";
import "./hello-world.css";

function HelloMsg() {
  return (
    <div className="hello-world" style={{ fontSize: "30px" }}>
      <p>
        <Typewriter
          options={{
            strings: [
              '<span style="color:#cc6600">System</span>.<span style="color:#00ccff"><b>out</b></span>.<span style="color:#99ff33">println</span>(<span style="color:#00cc00">"Hello World !"</span>);<img src="https://media.giphy.com/media/6iHcoDL5f4yjX4tBwe/giphy.gif" width="25px" height="25px" alt="emoji"/>',
              '<span style="color:#00ccff">console</span>.<span style="color:#ffff00">log</span><span style="color:#ff00ff">(</span><span style="color:#cc6600 ">"Hello World !"</span><span style="color:#ff00ff">)</span>;<img src="https://media.giphy.com/media/6iHcoDL5f4yjX4tBwe/giphy.gif" width="25px" height="25px alt="emoji"/>',
              '<span style="color:#ffff00">puts</span> <span style="color:#ff9900 ">"Hello World !"</span><img src="https://media.giphy.com/media/6iHcoDL5f4yjX4tBwe/giphy.gif" width="25px" height="25px alt="emoji"/>',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 25,
          }}
        />
      </p>
    </div>
  );
}

export default HelloMsg;
