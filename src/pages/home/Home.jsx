import React from "react";
import Logo from "../../components/home/Logo";
import HelloMsg from "../../components/home/HelloMsg";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Intro from "../../components/home/Intro";

function Home() {
  return (
    <>
      <div className="home">
        <Logo />
        <HelloMsg />
        <br />
        <br />
        <Intro />
        <br />
        <br/>
        <Navbar />
      </div>
    </>
  );
}

export default Home;
