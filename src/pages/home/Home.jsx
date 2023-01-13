import React from "react";
import Logo from "../../components/home/Logo";
import HelloMsg from "../../components/home/HelloMsg";
import "./home.css"

function Home() {
  return (
    <div className="home">
      <Logo />
      <HelloMsg />
    </div>
  );
}

export default Home;
