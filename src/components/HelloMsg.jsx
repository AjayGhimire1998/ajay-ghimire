import React from "react";
import Typewriter from "typewriter-effect";

function HelloMsg() {
  return (
    <div className="hello-world" style={{ fontSize: "30px" }}>
      <Typewriter
        options={{
          strings: [
            '<span style="color:#cc6600">System</span>.<span style="color:#00ccff"><b>out</b></span>.<span style="color:#99ff33">println</span>(<span style="color:#00cc00">"Hello World !"</span>);',
            '<span style="color:#00ccff">console</span>.<span style="color:#ffff00">log</span><span style="color:#ff00ff">(</span><span style="color:#ff9900 ">"Hello World !"</span><span style="color:#ff00ff">)</span>;',
            '<span style="color:#ffff00">puts</span> <span style="color:#ff9900 ">"Hello World !"</span>',
          ],
          words: ["hello"],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
}

export default HelloMsg;
