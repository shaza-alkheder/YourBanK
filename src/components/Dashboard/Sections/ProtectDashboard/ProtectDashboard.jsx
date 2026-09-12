import "./ProtectDashboard.css";
import SecurityCardData from "../../../../data/SecurityCardData.json";
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";
import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import { useEffect, useState } from "react";

const ProtectDashboard = () => {

 
  const [securityContent, setSecurityContent] = useState(() => {
    const storedSecurityContent = localStorage.getItem("securityContent");

    if (storedSecurityContent) {
      return JSON.parse(storedSecurityContent);
    }

    localStorage.setItem("securityContent", JSON.stringify(SecurityCardData));

    return SecurityCardData;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalData, setModalData] = useState({
    image: "",
    title: "",
    desc: "",
  });

   const [editId, setEditId] = useState(null);

  const [deleteSecurityData, setDeleteSecurityData] = useState(null);

  const [viewSecurityData, setViewSecurityData] = useState(null);
  useEffect(() => {
    localStorage.setItem("securityContent", JSON.stringify(securityContent));
  }, [securityContent]);

    const securityFields = [
    {
      label: "Image",
      typeInput: "text",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter image path",
      name: "image",
      id: "security-image",
    },
    {
      label: "Title",
      typeInput: "text",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter title",
      name: "title",
      id: "security-title",
    },
    {
      label: "Description",
      typeInput: "textarea",
      classNameInput: "S-K-Form-input",
      placeholderInput: "Enter description",
      name: "desc",
      id: "security-desc",
      rows: 6,
    },
  ];
    const addBtn = () => {
    setEditId(null);

    setDeleteSecurityData(null);

    setViewSecurityData(null);

    setModalData({
      image: "",
      title: "",
      desc: "",
    });

    setIsModalOpen(true);
  };

  const editBtn = (security) => {
    setEditId(security.id);

    setDeleteSecurityData(null);

    setViewSecurityData(null);

    setModalData({
      image: security.image,
      title: security.title,
      desc: security.desc,
    });

    setIsModalOpen(true);
  };

  const viewBtn = (security) => {
    setViewSecurityData(security);

    setEditId(null);

    setDeleteSecurityData(null);

    setIsModalOpen(true);
  };

  const deleteBtn = (security) => {
    setDeleteSecurityData(security);

    setEditId(null);

    setViewSecurityData(null);

    setIsModalOpen(true);
  };

  const closeBtn = () => {
    setIsModalOpen(false);

    setEditId(null);

    setDeleteSecurityData(null);

    setViewSecurityData(null);

    setModalData({
      image: "",
      title: "",
      desc: "",
    });
  };

  const submitBtn = (formData) => {
    if (editId !== null) {
      setSecurityContent((currentSecurity) => {
        const updatedSecurity = currentSecurity.map((security) => {
          if (security.id === editId) {
            return {
              ...security,
              image: formData.image,
              title: formData.title,
              desc: formData.desc,
            };
          }

          return security;
        });

        return updatedSecurity;
      });
    } else {
      setSecurityContent((currentSecurity) => {
        const lastId =
          currentSecurity.length > 0
            ? currentSecurity[currentSecurity.length - 1].id
            : 0;

        const newSecurity = {
          id: lastId + 1,
          image: formData.image,
          title: formData.title,
          desc: formData.desc,
        };

        return [...currentSecurity, newSecurity];
      });
    }

    closeBtn();
  };

  const deleteSecurity = (id) => {
    setSecurityContent((currentSecurity) => {
      const updatedSecurity = currentSecurity.filter(
        (security) => security.id !== id
      );

      return updatedSecurity;
    });

    closeBtn();
  };
  return <>
     <TableDashboard
        title1="Security"
        title2="Management"
        addBtn={addBtn}
      >
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
            {securityContent.map((security) => (
              <tr key={security.id}>
                <td>{security.id}</td>

                <td>
                  <img
                    src={security.image}
                    alt={security.title}
                    className="S-K-Security-table-image"
                  />
                </td>

                <td>{security.title}</td>

                {/* <td>{security.desc}</td> */}

                <td className="O-A-tdBtn">
                    <div className="O-A-flex">
    <BtnView
                    Funct={() => viewBtn(security)}
                  />

                  <BtnUpdate
                    Funct={() => editBtn(security)}
                  />

                  <BtnDelete
                    Funct={() => deleteBtn(security)}
                  />

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
            deleteSecurityData
              ? "Delete Security"
              : viewSecurityData
                ? "View Security"
                : editId !== null
                  ? "Update Security"
                  : "Add Security"
          }
          mode={
            deleteSecurityData
              ? "delete"
              : viewSecurityData
                ? "view"
                : "form"
          }
          fields={securityFields}
          data={viewSecurityData || modalData}
          image={viewSecurityData?.image || ""}
          onSubmit={submitBtn}
          onDelete={() =>
            deleteSecurity(deleteSecurityData.id)
          }
          onClose={closeBtn}
        />
      )}
  </>;
};

export default ProtectDashboard
