import { useEffect, useState } from "react";
import "./FAQDashboard.css";
import FaqCardData from "../../../../data/FaqCardData.json";
import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";
import ModalDashboard  from "../../UI/ModalDashboard/ModalDashboard"

const FAQDashboard = () => {
  const [faqs, setFaqs] = useState(() => {
    const storedFaqs = localStorage.getItem("faqs");
    if (storedFaqs) {
      return JSON.parse(storedFaqs);
    }

    localStorage.setItem("faqs", JSON.stringify(FaqCardData));

    return FaqCardData;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    question: "",
    answer: "",
  });
   const [editId, setEditId] = useState(null);
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);
  const deleteFaq = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this FAQ?",
    );

    if (!confirmDelete) return;

    setFaqs((currentFaqs) => {
      const updatedFaqs = currentFaqs.filter((faq) => faq.id !== id);

      localStorage.setItem("faqs", JSON.stringify(updatedFaqs));

      return updatedFaqs;
    });
  };

  const faqFields = [
    {
      label: "Question",
      typeInput: "text",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter question",
      name: "question",
      id: "faq-question",
    },
    {
      label: "Answer",
      typeInput: "textarea",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter answer",
      name: "answer",
      id: "faq-answer",
      rows: 6,
    },
  ];
    const addBtn = () => {
    setEditId(null);

    setModalData({
      question: "",
      answer: "",
    });

    setIsModalOpen(true);
  };
   const editBtn = (faq) => {
    setEditId(faq.id);

    setModalData({
      question: faq.question,
      answer: faq.answer,
    });

    setIsModalOpen(true);
  };
   const closeBtn = () => {
    setIsModalOpen(false);
    setEditId(null);

    setModalData({
      question: "",
      answer: "",
    });
  };
  const submitBtn = (formData) =>{
 if (editId !== null) {
   setFaqs((currentFaqs) => {
        const updatedFaqs = currentFaqs.map((faq) => {
          if (faq.id === editId) {
            return {
              ...faq,
              question: formData.question,
              answer: formData.answer,
            };
          }

          return faq;
        });
         return updatedFaqs;
 });
}
 else {
      setFaqs((currentFaqs) => {
  const lastId =
    currentFaqs.length > 0
      ? currentFaqs[currentFaqs.length - 1].id
      : 0;

  const newFaq = {
    id: lastId + 1,
    question: formData.question,
    answer: formData.answer,
  };

  return [...currentFaqs, newFaq];
});
    }

    closeBtn();
  };

 
  
  return (
    <>
     
        <TableDashboard title1="FAQ" title2="Management">
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
                      Funct={() => editBtn(faq)}
                    />

                    <BtnDelete Funct={() => deleteFaq(faq.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableDashboard>
       {isModalOpen && (
        <ModalDashboard
          title={editId !== null ? "Update FAQ" : "Add FAQ"}
          fields={faqFields}
          data={modalData}
          onSubmit={submitBtn}
          onClose={closeBtn}
        />
      )}
    </>
  );
};

export default FAQDashboard;
