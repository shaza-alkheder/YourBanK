import "./Card.css";
const Card = ({ image,icon, title, desc,classNames = {} }) => {
  return (
    <>
      <div className={`skCard ${classNames.card || ""}`}>
        {image ? (
        <div className={` ${classNames.imageDiv || ""}`}>
          <img src={image} alt={title || ""}  className={` ${classNames.image || ""}`}/>
        </div>
      ) : icon ? (
        <div className={`iconCard ${classNames.icon || ""}`}>
          {icon}
        </div>
      ) : null}
        {title ? <h2 className={classNames.title || ""}>{title}</h2> : null}
        {desc ?   <p className={classNames.desc || ""}>{desc}</p> : null}
      </div>
    </>
  );
};

export default Card;
