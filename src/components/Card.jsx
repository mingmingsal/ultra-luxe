import "./Card.css";
export const Card = ({ prologue, title, description, photo, buttonText='Learn More' }) => {
  return (
    <div className="card">
      <img loading="lazy" src={photo} />
      <div className="card-text">
        <p>{prologue}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
