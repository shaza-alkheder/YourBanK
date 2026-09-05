import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import "./FAQ.css";
import FaqCardData from "../../../data/FaqCardData.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
  const [loadAll, setLoadAll] = useState(false);
  const [faqs, setFaqs] = useState(() => {
    const FaqStored = localStorage.getItem("faqs");
    return FaqStored ? JSON.parse(FaqStored) : FaqCardData;
    // if (FaqStored) {
    //   return JSON.parse(FaqStored);
    // }

    // localStorage.setItem("faqs", JSON.stringify(FaqCardData));
    // return FaqCardData;
  });
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);
  const loadFaq = loadAll ? faqs : faqs.slice(0, 4);
  return (
    <>
      <section className="S-K-FAQ">
        <TitleDescription
          titleParts={[
            {
              text: "Frequently",
              className: "DS_ColorLimeGreen",
            },
            {
              text: "Asked Questions",
              className: "",
            },
          ]}
          description="Still you have any questions? Contact our Team via support@yourbank.com"
        />

        <div
          className={`S-K-FaqCard ${!loadAll ? "S-K-FaqCard-collapsed" : ""}`}
        >
          {loadFaq.map((faq) => (
            <Card
              key={faq.id}
              title={faq.question}
              desc={faq.answer}
              classNames={{
                imgTitleDiv: "S-K-headerCardFAQ",
                card: "S-K-cardFaqStyle",
                title: "S-K-titleCardFAQ",
                desc: "S-K-descriptionCardFaq",
              }}
            />
          ))}
        </div>

        <Button
          className="S-K-styleButton"
          content={
            loadAll ? (
              <>
                <span>See Less </span>
                <MdKeyboardArrowUp />
              </>
            ) : (
              <>
                <span>Load All FAQ’s </span>
                <MdKeyboardArrowDown />
              </>
            )
          }
          onClick={() => setLoadAll(!loadAll)}
        />
      </section>
    </>
  );
};

export default FAQ;
