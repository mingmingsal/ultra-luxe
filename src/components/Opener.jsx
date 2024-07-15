import "./Opener.css";
import gourmand from "../assets/images/Ultra_Luxe_Gourmand.webp";
const Opener = () => {
  return (
    <section className="opener">
      <div className="opener-text">
        <h2>A Luxury Home Away From Home </h2>
        <img src={gourmand} loading="lazy" />
        <p className="flavor-text">
          Step into a world where luxury meets excitement at the Ultra-Luxe, the
          premier casino-resort destination. Nestled in the heart of the Strip,
          our resort offers a getaway like no other, where indulgence and
          entertainment are the pillars of your stay.
        </p>
      </div>
    </section>
  );
};

export default Opener;
