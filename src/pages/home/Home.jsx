import React from "react";
// import HelloMsg from "../../components/home/HelloMsg";
import "./home.css";
import Intro from "../../components/home/Intro";

function Home({ play }) {
  return (
    <section className="home">
      {/* <br /> */}
      {/* <HelloMsg /> */}
      <Intro play={play} />
    </section >
  );
}

export default Home;
