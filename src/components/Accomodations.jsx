import "./Accomodations.css";
import bonvivant from "../assets/images/Bon_Vivant_suite.webp";
import basic from "../assets/images/Basic_suite.webp";
import  henderson from "../assets/images/Henderson_penthouse.webp";

import { Card } from "./Card";
export const Accomodations = () => {
  return (
    <div className="accomodations">
      <h2>Accomodations</h2>
      <div className="accomodations-cards">
        <Card
          prologue="2 adults | 1 child below 7"
          title="Basic Room"
          description="from $189 a night"
          photo={basic}
        />
        <Card
          prologue="2 adults | 1 child below 7"
          title="Bon Vivant Suite"
          description="from $489 a night"
          photo={bonvivant}
        />
                <Card
          prologue="8 adults | 3 children below 7"
          title="Henderson Penthouse"
          description="from $1289 a night"
          photo={henderson}
        />
      </div>
    </div>
  );
};
