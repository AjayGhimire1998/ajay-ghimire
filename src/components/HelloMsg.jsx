import React from "react";
import Typewriter from "typewriter-effect";

function HelloMsg() {
  return (
    <div className="hello-world">
      <Typewriter
        options={{
          strings: [
            'System.out.println("Hello World !");',
            'console.log("Hello World !")',
            'puts("Hello World !"',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default HelloMsg;
