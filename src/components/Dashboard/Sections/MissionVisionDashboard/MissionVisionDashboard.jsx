import { useEffect, useState } from "react";

import MissionVisionData from "../../../../data/MissionVisionData.json";

import TableDashboard from "../../Layout/TableDashboard/TableDashboard";

import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";

import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";

import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";

import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";

const MissionVisionDashboard = () => {

    const [missionVision, setMissionVision] = useState(() => {

    const storedMissionVision = localStorage.getItem("MissionVisionData");

    if (storedMissionVision) {

        return JSON.parse(storedMissionVision);

    }

    localStorage.setItem(
        "MissionVisionData",
        JSON.stringify(MissionVisionData)
    );

    return MissionVisionData;

    });

            const [isModalOpen, setIsModalOpen] = useState(false);

            const [modalData, setModalData] = useState({title: "", description: "", image: "", img: ""});

            const [editId, setEditId] = useState(null);

            const [deleteMissionVisionData, setDeleteMissionVisionData] = useState(null);

            const [viewMissionVisionData, setViewMissionVisionData] = useState(null);

    useEffect(() => {

        localStorage.setItem("MissionVisionData",JSON.stringify(missionVision));}, [missionVision]);

        const missionVisionFields = [

    {
        label: "Title",
        typeInput: "text",
        classNameInput: "S-K-Form-input",
        placeholderInput: "Enter title",
        name: "title",
        id: "mission-vision-title",
    },

    {
        label: "Description",
        typeInput: "textarea",
        classNameInput: "S-K-Form-input",
        placeholderInput: "Enter description",
        name: "description",
        id: "mission-vision-description",
        rows: 6,
    },

    {
        label: "Image",
        typeInput: "text",
        classNameInput: "S-K-Form-input",
        placeholderInput: "Enter image URL",
        name: "image",
        id: "mission-vision-image",
    },

    {
        label: "Background Image",
        typeInput: "text",
        classNameInput: "S-K-Form-input",
        placeholderInput: "Enter background image URL",
        name: "img",
        id: "mission-vision-background-image",
    },

  ];

    const addBtn = () => {

                            setEditId(null);

                        setModalData({title: "", description: "", image: "", img: ""});

                            setIsModalOpen(true);

                        };

        const editBtn = (item) => {

                                        setEditId(item.id);

                                                setModalData({

                                                                title: item.title,

                                                                description: item.description,

                                                                image: item.image,

                                                                img: item.img,

                                                                    });

                                setIsModalOpen(true);

                                };

            const closeBtn = () => {

                setIsModalOpen(false);

                    setEditId(null);

                    setDeleteMissionVisionData(null);

                setViewMissionVisionData(null);

                setModalData({title: "",description: "",image: "",img: ""});

                };

        const deleteBtn = (item) => {

            setDeleteMissionVisionData(item);

            setEditId(null);

            setIsModalOpen(true);

            };

    const submitBtn = (formData) => {

    if (editId !== null) {

      setMissionVision((currentMissionVision) => {

        const updatedMissionVision = currentMissionVision.map((item) => {

          if (item.id === editId) {

            return {...item,title: formData.title,description: formData.description,image: formData.image,img: formData.img,};}

            return item;

        });

        return updatedMissionVision;

        });

    } 
    else {

      setMissionVision((currentMissionVision) => {

        const lastId =
          currentMissionVision.length > 0
            ? currentMissionVision[currentMissionVision.length - 1].id
            : 0;

        const newMissionVision = {

            id: lastId + 1,

            title: formData.title,

            description: formData.description,

            image: formData.image,

            img: formData.img,

        };

        return [...currentMissionVision, newMissionVision];

    });

    }

    closeBtn();

  };

  const deleteMissionVision = (id) => {

    setMissionVision((currentMissionVision) => {

      const updatedMissionVision = currentMissionVision.filter(
        (item) => item.id !== id
      );

      return updatedMissionVision;

    });

    closeBtn();

  };

  const viewBtn = (item) => {

    setViewMissionVisionData(item);

    setEditId(null);

    setDeleteMissionVisionData(null);

    setIsModalOpen(true);

  };

  return (

    <>

      <TableDashboard
        title1="Mission &"
        title2="Vision"
        addBtn={addBtn}
      >

        <table>

          <thead>

            <tr>

                <th>ID</th>

                <th>Title</th>

                <th className="O-A-action">Action</th>

            </tr>

            </thead>

            <tbody>

            {missionVision.map((item) => (

                <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.title}</td>

                <td className="O-A-tdBtn">

                    <BtnView Funct={() => viewBtn(item)} />

                    <BtnUpdate Funct={() => editBtn(item)} />

                    <BtnDelete Funct={() => deleteBtn(item)} />

                </td>

                </tr>

            ))}

            </tbody>

        </table>

        </TableDashboard>

        {isModalOpen && (

        <ModalDashboard

            title={

            deleteMissionVisionData
                ? "Delete Mission & Vision"
                : viewMissionVisionData
                ? "View Mission & Vision"
                : editId !== null
                ? "Update Mission & Vision"
                : "Add Mission & Vision"
                }

            mode={

            deleteMissionVisionData
            ? "delete"
            : viewMissionVisionData
            ? "view"
            : "form"

            }

            fields={missionVisionFields}

            data={viewMissionVisionData || modalData}

            onSubmit={submitBtn}

            onDelete={() =>
            deleteMissionVision(deleteMissionVisionData.id)
            }

            onClose={closeBtn}

        />

        )}

    </>

    );

};

export default MissionVisionDashboard;