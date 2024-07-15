import { useRef } from "react";
import photo1 from "../assets/images/TheTopShelf.webp";
import photo2 from "../assets/images/UL_bathhouse.webp";
import photo3 from "../assets/images/Brahmin_Wellington_UL_members_only.webp";
import photo4 from "../assets/images/Ultra_Luxe_Gourmand.webp";

import "./Gallery.css";
export const Gallery = () => {
  const mainPhoto = useRef(null);

  function changePhoto(photo) {
    mainPhoto.current.src = photo;
  }
  return (
    <section>
      <div className="gallery">
        <img className="big-photo" src={photo1} ref={mainPhoto} />
        <div className="small-gallery">
          <a onClick={() => changePhoto(photo1)}>
            <img className="small-photo" src={photo1} />
          </a>
          <a onClick={() => changePhoto(photo2)}>
            <img className="small-photo" src={photo2} />
          </a>
          <a onClick={() => changePhoto(photo3)}>
            <img className="small-photo" src={photo3} />
          </a>
          <a onClick={() => changePhoto(photo4)}>
            <img className="small-photo" src={photo4} />
          </a>
        </div>
      </div>
      <h2>Unveiling our new Accomodations</h2>
    </section>
  );
};
