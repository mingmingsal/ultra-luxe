import "./Opener.css";
import gourmand from '../assets/images/Ultra_Luxe_Gourmand.webp'
const Opener = () => {
  return (
    <section className="opener">
      <div className="opener-text">
        <h2>A Luxury Home Away From Home </h2>
        <img  src={gourmand}/>
        <p className="flavor-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit unde
          ducimus magni sint saepe! Expedita officia temporibus, sint
          consequuntur pariatur distinctio fugit non, esse ea culpa quibusdam
          tenetur quidem officiis? <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit unde
          ducimus magni sint saepe! Expedita officia temporibus, sint
          consequuntur pariatur distinctio fugit non, esse ea culpa quibusdam
          tenetur quidem officiis?
        </p>
        
      </div>
    </section>
  );
};

export default Opener;
