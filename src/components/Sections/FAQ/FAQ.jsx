import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import "./FAQ.css";
import FaqCardData from "../../../data/FaqCardData.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

const FAQ = () => {
  const [loadAll, setLoadAll] = useState(false);
  const [faqs, setFaqs] = useState(() => {
    const storedFaqs = localStorage.getItem("faqs");

    if (storedFaqs) {
      return JSON.parse(storedFaqs);
    }

    localStorage.setItem("faqs", JSON.stringify(FaqCardData));

    return FaqCardData;
  });

  useEffect(() => {
    const storageChange = (event) => {
      if (event.key === "faqs") {
        const storedFaqs = localStorage.getItem("faqs");

        if (storedFaqs) {
          setFaqs(JSON.parse(storedFaqs));
        } else {
          setFaqs([]);
        }
      }
    };

    window.addEventListener("storage", storageChange);

    return () => {
      window.removeEventListener("storage", storageChange);
    };
  }, []);
  const loadFaq = loadAll ? faqs : faqs.slice(0, 4);
  return (
    <>
      <motion.section
        className="S-K-FAQ"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
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
          <AnimatePresence initial={false}>
            {loadFaq.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={index >= 4 ? { opacity: 0, y: 30 } : false}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 0.45,
                  delay: index >= 4 ? (index - 4) * 0.08 : 0,
                }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          whileTap={{ scale: 0.97 }}
        >
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
        </motion.div>
      </motion.section>
    </>
  );
};

export default FAQ;
