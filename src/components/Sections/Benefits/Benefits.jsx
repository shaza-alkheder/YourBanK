import { useEffect, useState } from "react";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import "./Benefits.css";
import BenefitsCardData from "../../../data/BenefitsCardData.json";
import Card from "../../UI/Card/Card";

const Benefits = () => {
  const [benefitsContent, setBenefitsContent] = useState(() => {
    const benefitsStored = localStorage.getItem("benefitsContent");
    return benefitsStored ? JSON.parse(benefitsStored) : BenefitsCardData;
  });
 

     useEffect(() => {
    const storageChange = (event) => {
      if (event.key === "benefitsContent") {
        const benefitsStored =
          localStorage.getItem("benefitsContent");

        if (benefitsStored) {
          setBenefitsContent(
            JSON.parse(benefitsStored)
          );
        } else {
          setBenefitsContent([]);
        }
      }
    };

    window.addEventListener(
      "storage",
      storageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        storageChange
      );
    };
  }, []);



  return (
    <>
      <section className="S-K-Benefits">
        <div className="TitleHeader">
          <TitleDescription
            titleParts={[
              {
                text: "Our",
                className: "",
              },
              {
                text: "Benefits",
                className: "DS_ColorLimeGreen",
              },
            ]}
            description="At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
          />
        </div>
        <div className="S-K-BenefitsCard">
          {benefitsContent.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              titleIcon={
                <div className="borderImage">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="iconImage"
                  />
                </div>
              }
              desc={data.desc}
              classNames={{
                imgTitleDiv: "S-K-headerCardBenefits",
                card: "S-K-cardBenefitsStyle",
                title: "S-K-titleCardBenefits",
                titleIcon: "S-K-titleIcon",
                desc: "S-K-descriptionCardBenefits",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
