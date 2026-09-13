import { useEffect, useState } from "react";
import "./FAQDashboard.css";
import FaqCardData from "../../../../data/FaqCardData.json";
import TableDashboard from "../../UI/TableDashboard/TableDashboard";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";

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
  const [deleteFaqData, setDeleteFaqData] = useState(null);
  const [viewFaqData, setViewFaqData] = useState(null);
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);

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
    setDeleteFaqData(null);
    setViewFaqData(null);
    setModalData({
      question: "",
      answer: "",
    });
  };
  const deleteBtn = (faq) => {
    setDeleteFaqData(faq);
    setEditId(null);
    setIsModalOpen(true);
  };
  const submitBtn = (formData) => {
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
    } else {
      setFaqs((currentFaqs) => {
        const lastId =
          currentFaqs.length > 0 ? currentFaqs[currentFaqs.length - 1].id : 0;

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
  const deleteFaq = (id) => {
    setFaqs((currentFaqs) => {
      const updatedFaqs = currentFaqs.filter((faq) => faq.id !== id);

      return updatedFaqs;
    });

    closeBtn();
  };
  const viewBtn = (faq) => {
    setViewFaqData(faq);
    setEditId(null);
    setDeleteFaqData(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <TableDashboard title1="FAQ" title2="Management" addBtn={addBtn}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th className="O-A-action">Action</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((faq) => (
              <tr key={faq.id}>
                <td>{faq.id}</td>

                <td>{faq.question}</td>

                <td className="O-A-tdBtn">
                  <div className="O-A-flex">
                    <BtnView Funct={() => viewBtn(faq)} />
                    <BtnUpdate Funct={() => editBtn(faq)} />

                    <BtnDelete Funct={() => deleteBtn(faq)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableDashboard>
      {isModalOpen && (
        <ModalDashboard
          title={
            deleteFaqData
              ? "Delete FAQ"
              : viewFaqData
                ? "View FAQ"
                : editId !== null
                  ? "Update FAQ"
                  : "Add FAQ"
          }
          mode={deleteFaqData ? "delete" : viewFaqData ? "view" : "form"}
          fields={faqFields}
          data={viewFaqData || modalData}
          onSubmit={submitBtn}
          onDelete={() => deleteFaq(deleteFaqData.id)}
          onClose={closeBtn}
        />
      )}
    </>
  );
};

export default FAQDashboard;
