import "./Card.css";
const Card = ({ image, title, desc, className = "" }) => {
  return (
    <>
      <div className={`card ${className}`}>
        {image ? (
          <div className="iconCard">
            <img src={image} alt={title || ""} />
          </div>
        ) : null}
        {title ? <h2>{title}</h2> : null}
        {desc ? <p>{desc}</p> : null}
      </div>
    </>
  );
};

export default Card;
