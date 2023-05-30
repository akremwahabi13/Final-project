

import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import landingImg from "../../images/aaa.jpg";
import logo from "../../images/LETS.png";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import LastPart from "./LastPart";
import Footer from "./Footer";
const Landing = () => {
  return (
    <div className="landing" style={{background:"black"}} >
      <img src={landingImg} alt="" id="img" />
      <h1 id="first_heading">New here? What is Let's Camp?</h1>
      <div className="landing-first">
        <img src={logo} alt="" id="another-logo" />
        <h1>Tunisian Campers</h1>
        <p>
          We are an online platform that connects campers with campgrounds. If
          you’re a camper, it’s a handy tool to find and connect with other campers.
          You can review and rate campgrounds in Tunisia and the whole world.
          So welcome to the first Tunisian Campers Platform...
        </p>
        <button className="btn_landing">
          <Link to="/login" className="link_landing">Login</Link>
        </button>
        <button className="btn_landing">
          <Link to="/register" className="link_landing">Register</Link>
        </button>
      </div>
      <FirstPart/>
      <SecondPart/>
      <LastPart/>
      <Footer/>
    </div>
  );
};

export default Landing;