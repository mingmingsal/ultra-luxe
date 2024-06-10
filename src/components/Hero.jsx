import React from "react";
import "./Hero.css";
import ReactPlayer from "react-player";
import herobg from "../assets/videos/Ultra Luxe Hero.mp4";
const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <p>Welcome to</p>
        <h1>The Ultra-Luxe</h1>
        <h2>Casino & Spa Hotel</h2>
        <button>Learn More</button>
      </div>
      <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
      >
        <source src={herobg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
