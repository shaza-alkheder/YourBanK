import { useEffect, useState } from "react";
import "./FAQDashboard.css";
import FaqCardData from "../../../../data/FaqCardData.json";
import ContaninerDashboard from "../../UI/ContaninerDashboard/ContaninerDashboard";
import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";

const FAQDashboard = () => {
  const [faqs, setFaqs] = useState(() => {
    const storedFaqs = localStorage.getItem("faqs");
    if (storedFaqs) {
      return JSON.parse(storedFaqs);
    }

    localStorage.setItem("faqs", JSON.stringify(FaqCardData));

    return FaqCardData;
  });
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);
const deleteFaq = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this FAQ?"
  );

  if (!confirmDelete) return;

setFaqs((currentFaqs) => {
  const updatedFaqs = currentFaqs.filter(
    (faq) => faq.id !== id
  );

  localStorage.setItem(
    "faqs",
    JSON.stringify(updatedFaqs)
  );

  window.dispatchEvent(new Event("faqsUpdated"));

  return updatedFaqs;
});
};
  return <>
     <ContaninerDashboard>

      <TableDashboard
        title1="FAQ"
        title2="Management"
      >

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Answer</th>
              <th className="O-A-action">Action</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((faq) => (
              <tr key={faq.id}>

                <td>{faq.id}</td>

                <td>{faq.question}</td>

                <td>{faq.answer}</td>

                <td className="O-A-tdBtn">

                  <BtnUpdate
                    Funct={() => {
                      console.log("Update:", faq.id);
                    }}
                  />

                  <BtnDelete
                    Funct={() => deleteFaq(faq.id)}
                  />

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </TableDashboard>

    </ContaninerDashboard>
  </>;
};

export default FAQDashboard;
