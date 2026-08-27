import Card from "../../UI/Card/Card";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import "./FAQ.css";

const FAQ = () => {
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

        <div className="S-K-FaqCard">
         <Card
            title="How do I open an account with YourBank?"
            desc="Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
            classNames={{
              imgTitleDiv: "S-K-headerCardFAQ",
              card: "S-K-cardFaqStyle",
              title: "S-K-titleCardFAQ",
              desc: "S-K-descriptionCardFaq",
            }}
            
          />
            <Card
            title="How do I open an account with YourBank?"
            desc="Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
            classNames={{
              imgTitleDiv: "S-K-headerCardFAQ",
              card: "S-K-cardFaqStyle",
              title: "S-K-titleCardFAQ",
              desc: "S-K-descriptionCardFaq",
            }}
            
          />
             <Card
            title="How do I open an account with YourBank?"
            desc="Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
            classNames={{
              imgTitleDiv: "S-K-headerCardFAQ",
              card: "S-K-cardFaqStyle",
              title: "S-K-titleCardFAQ",
              desc: "S-K-descriptionCardFaq",
            }}
            
          />
           <Card
            title="How do I open an account with YourBank?"
            desc="Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
            classNames={{
              imgTitleDiv: "S-K-headerCardFAQ",
              card: "S-K-cardFaqStyle",
              title: "S-K-titleCardFAQ",
              desc: "S-K-descriptionCardFaq",
            }}
            
          />
        </div>
      </section>
    </>
  );
};

export default FAQ;
