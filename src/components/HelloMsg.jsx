import React from "react";
import Typewriter from "typewriter-effect";

function HelloMsg() {
  var app = document.getElementsByClassName("hello-world");

  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });
  console.log("Hello,world");

  return (
    <div className="hello-world" style={{ fontSize: "30px" }}>
      <Typewriter
        options={{
          strings: [
            '<span style="color:#cc6600">System</span>.<span style="color:#00ccff">out</span>.println("Hello World !");',
            'console.log("Hello World !");',
            'puts "Hello World !"',
          ],
          words: ["hello"],
          autoStart: true,
          loop: true,
          //   skipAddStyles: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default HelloMsg;
