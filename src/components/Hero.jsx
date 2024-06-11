import "./Hero.css";
import herobg from "../assets/videos/Ultra Luxe Hero.mp4";
import { useRef } from "react";
const Hero = () => {
  const videoPlayer = useRef(null);
  function setPlayback(){
    videoPlayer.current.playbackRate = .75;
  }
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
        ref={videoPlayer}
        onPlay={setPlayback}
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
