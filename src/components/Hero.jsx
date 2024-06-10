import React from "react";
import "./Hero.css";
import ReactPlayer from "react-player";
import herobg from "../assets/videos/Ultra Luxe Hero.mp4";
const Hero = () => {
  return (
    <div className="hero">
      <div className="player-wrapper">
        <ReactPlayer
          width="100%"
          height='100%'
          loop
          playing
          muted
          playbackRate={0.5}
          url={herobg}
        />
      </div>

      <p>Welcome to</p>
      <h1>The Ultra-Luxe</h1>
      <h3>Casino & Spa Hotel</h3>
      <button>Learn More</button>
    </div>
  );
};

export default Hero;
