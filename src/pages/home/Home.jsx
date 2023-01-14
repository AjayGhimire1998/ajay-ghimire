import React from "react";
import Logo from "../../components/home/Logo";
import HelloMsg from "../../components/home/HelloMsg";
import "./home.css";
import Intro from "../../components/home/Intro";

function Home({shadow, logo}) {
  return (
    <>
      <div className="home">
        <Logo logo={logo} shadow={shadow}/>
        <HelloMsg />
        <br />
        <Intro shadow={shadow}/>

      </div>
    </>
  );
}

export default Home;
