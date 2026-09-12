import "./BenefitsDashboard.css";
import BenefitsCardData from "../../../../data/BenefitsCardData.json";
import { useEffect, useState } from "react";
import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";

const BenefitsDashboard = () => {
  const [benefitsContent, setBenefitsContent] = useState(() => {
    const storedBenefitsContent = localStorage.getItem("benefitsContent");

    if (storedBenefitsContent) {
      return JSON.parse(storedBenefitsContent);
    }

    localStorage.setItem("securityContent", JSON.stringify(BenefitsCardData));

    return BenefitsCardData;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    image: "",
    title: "",
    desc: "",
  });

  const [editId, setEditId] = useState(null);

  const [deleteBenefitsData, setDeleteBenefitsData] = useState(null);

  const [viewBenefitsData, setViewBenefitsData] = useState(null);
  useEffect(() => {
    localStorage.setItem("benefitsContent", JSON.stringify(benefitsContent));
  }, [benefitsContent]);
  const benefitsFields = [
    {
      label: "Image",
      typeInput: "text",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter image path",
      name: "image",
      id: "benefits-image",
    },
    {
      label: "Title",
      typeInput: "text",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter title",
      name: "title",
      id: "benefits-title",
    },
    {
      label: "Description",
      typeInput: "textarea",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter description",
      name: "desc",
      id: "benefits-desc",
      rows: 6,
    },
  ];
  const addBtn = () => {
    setEditId(null);

    setDeleteBenefitsData(null);

    setViewBenefitsData(null);

    setModalData({
      image: "",
      title: "",
      desc: "",
    });

    setIsModalOpen(true);
  };

  const editBtn = (benefit) => {
    setEditId(benefit.id);

    setDeleteBenefitsData(null);

    setViewBenefitsData(null);

    setModalData({
      image: benefit.image,
      title: benefit.title,
      desc: benefit.desc,
    });

    setIsModalOpen(true);
  };

  const viewBtn = (benefit) => {
    setViewBenefitsData(benefit);

    setEditId(null);

    setDeleteBenefitsData(null);

    setIsModalOpen(true);
  };

  const deleteBtn = (benefit) => {
    setDeleteBenefitsData(benefit);

    setEditId(null);

    setViewBenefitsData(null);

    setIsModalOpen(true);
  };

  const closeBtn = () => {
    setIsModalOpen(false);

    setEditId(null);

    setDeleteBenefitsData(null);

    setViewBenefitsData(null);

    setModalData({
      image: "",
      title: "",
      desc: "",
    });
  };

  const submitBtn = (formData) => {
    if (editId !== null) {
      setBenefitsContent((currentBenefits) => {
        const updatedBenefits = currentBenefits.map((benefit) => {
          if (benefit.id === editId) {
            return {
              ...benefit,
              image: formData.image,
              title: formData.title,
              desc: formData.desc,
            };
          }

          return benefit;
        });

        return updatedBenefits;
      });
    } else {
      setBenefitsContent((currentBenefits) => {
        const lastId =
          currentBenefits.length > 0
            ? currentBenefits[currentBenefits.length - 1].id
            : 0;

        const newBenefit = {
          id: lastId + 1,
          image: formData.image,
          title: formData.title,
          desc: formData.desc,
        };

        return [...currentBenefits, newBenefit];
      });
    }

    closeBtn();
  };

  const deleteBenefit = (id) => {
    setBenefitsContent((currentBenefits) => {
      const updatedBenefits = currentBenefits.filter(
        (benefit) => benefit.id !== id,
      );

      return updatedBenefits;
    });

    closeBtn();
  };
  return (
    <>
      <TableDashboard title1="Benefits" title2="Management" addBtn={addBtn}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              {/* <th>Description</th> */}
              <th className="O-A-action">Action</th>
            </tr>
          </thead>

          <tbody>
            {benefitsContent.map((benefit) => (
              <tr key={benefit.id}>
                <td>{benefit.id}</td>

                <td>
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="S-K-Benefits-table-image"
                  />
                </td>

                <td>{benefit.title}</td>

                {/* <td>{benefit.desc}</td> */}

                <td className="O-A-tdBtn">
                  <div className="O-A-flex">
                    <BtnView Funct={() => viewBtn(benefit)} />

                    <BtnUpdate Funct={() => editBtn(benefit)} />

                    <BtnDelete Funct={() => deleteBtn(benefit)} />
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
            deleteBenefitsData
              ? "Delete Benefit"
              : viewBenefitsData
                ? "View Benefit"
                : editId !== null
                  ? "Update Benefit"
                  : "Add Benefit"
          }
          mode={
            deleteBenefitsData ? "delete" : viewBenefitsData ? "view" : "form"
          }
          fields={benefitsFields}
          data={viewBenefitsData || modalData}
          image={viewBenefitsData?.image || ""}
          onSubmit={submitBtn}
          onDelete={() => deleteBenefit(deleteBenefitsData.id)}
          onClose={closeBtn}
        />
      )}
    </>
  );
};

export default BenefitsDashboard;
