import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import SecurityCardData from "../../../data/SecurityCardData.json";

import "./Protect.css";

const Protect = () => {
  const [securityContent, setSecurityContent] = useState(() => {
    const securitContentStored = localStorage.getItem("securityContent");
 return securitContentStored ? JSON.parse(securitContentStored) : SecurityCardData;
   
  });
    useEffect(() => {
    localStorage.setItem(
      "securityContent",
      JSON.stringify(securityContent)
    );
  }, [securityContent]);
  return (
    <>
      <section className="S-K-Protect">
        <TitleDescription
          titleParts={[
            {
              text: "How We",
              className: "",
            },
            {
              text: "Protect You",
              className: "DS_ColorLimeGreen",
            },
          ]}
          description="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
        />
        <div className="S-K-ProdectCard">
          {securityContent.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              titleIcon={<div className="borderImage"><img src={data.image} alt={data.title} className="iconImage"/></div>}
              desc={data.desc}
              classNames={{
                imgTitleDiv: "S-K-headerCardProtect",
                card: "S-K-cardProtectStyle",
                title: "S-K-titleCardProtect",
                titleIcon: "S-K-titleIcon",
                desc: "S-K-descriptionCardProtect",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Protect;
