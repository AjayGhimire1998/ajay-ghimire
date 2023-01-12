import React from "react";
import Logo from "../components/static/Logo";
import HelloMsg from "../components/static/HelloMsg";

function Home() {
  return (
    <>
      <div className="ui inverted vertical masthead center aligned segment">
        <Logo />
        <HelloMsg />
      </div>
    </>
  );
}

export default Home;
