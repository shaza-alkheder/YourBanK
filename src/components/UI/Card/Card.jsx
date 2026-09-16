import "./Card.css";
const Card = ({ image=null, icon, titleIcon, title, desc, classNames = {} }) => {
  return (
    <>
      <div className={`skCard ${classNames.card || ""}`}>
        {image ? (
          <div className={` ${classNames.imageDiv || ""}`}>
            <img
              src={image.path}
              alt={image.altImg || ""}
              className={` ${classNames.image || ""}`}
            />
          </div>
        ) : icon ? (
          <div className={`iconCard ${classNames.icon || ""}`}>{icon}</div>
        ) : null}
        {title ? (
          <div className={classNames.imgTitleDiv || ""}>
            {title ? <h2 className={classNames.title || ""}>{title}</h2> : null}
            {titleIcon ? (
              <div className={classNames.titleIcon || ""}>{titleIcon}</div>
            ) : null}
          </div>
        ) : null}

        {desc ? <p className={classNames.desc || ""}>{desc}</p> : null}
      </div>
    </>
  );
};

export default Card;

// example
// <Card
//     image="/img/Icon.png"
//     title="Loans and Mortgages"
//     desc="Realize your dreams with our flexible loan and mortgage options."
//     classNames={{
//       card: "securityCard",
//       title: "securityCardTitle",
//     }}
//   />
