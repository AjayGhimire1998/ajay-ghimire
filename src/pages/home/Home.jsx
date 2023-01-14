import React from "react";
import HelloMsg from "../../components/home/HelloMsg";
import "./home.css";
import Intro from "../../components/home/Intro";

function Home({shadow, logo}) {
  return (
    <>
      <div className="home">

        <HelloMsg />
        <br />
        <Intro shadow={shadow}/>

      </div>
    </>
  );
}

export default Home;
