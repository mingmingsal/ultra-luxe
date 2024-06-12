import "./Hero.css";
import herobg from "../assets/videos/ultraluxe720.mp4";
import { useRef } from "react";
const Hero = () => {
  const videoPlayer = useRef(null);
  function setPlayback(){
    videoPlayer.current.playbackRate = .75;
  }
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Welcome to</p>
        <h1>The Ultra-Luxe</h1>
        <h2>Casino & Spa Hotel</h2>
        <button>Learn More</button>
      </div>
      <video
        autoPlay
        ref={videoPlayer}
        onPlay={setPlayback}
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      >
        <source src={herobg} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
