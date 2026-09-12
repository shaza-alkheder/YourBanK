import  { useState, useEffect } from 'react';
        import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
        import './PressReleasesDashboard.css'
        import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
        import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
        import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";
        import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";
        import PressReleasesData from "../../../../data/PressReleasesData.json";


        const PressReleasesDashboard = () => {

            const [pressReleasesDashboard, setPressReleasesDashboard] = useState(() => {
                const storedPressData = localStorage.getItem("PressReleasesData");
                if (storedPressData) {
                try {
                    return JSON.parse(storedPressData);
                } catch (error) {
                    console.error("Error parsing data:", error);
                }
                }
                return PressReleasesData || [];
            });

            useEffect(() => {
                localStorage.setItem("PressReleasesData", JSON.stringify(pressReleasesDashboard));
            }, [pressReleasesDashboard]);
            const [isModalOpen, setIsModalOpen] = useState(false);
            const [modalData, setModalData] = useState({
                title: "",
                desc: "",
                location: "",
                date: "",
                imagePath: "",
                altImg: "",
            });
            const [editIndex, setEditIndex] = useState(null);
            const [deletePressData, setDeletePressData] = useState(null);
            const [viewPressData, setViewPressData] = useState(null);
            const pressFields = [
                {
                label: "Title",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter press title",
                name: "title",
                id: "press-title",
                },
                {
                label: "Description",
                typeInput: "textarea",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter description",
                name: "desc",
                id: "press-description",
                rows: 4,
                },
                {
                label: "Location",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter location",
                name: "location",
                id: "press-location",
                },
                {
                label: "Date",
                typeInput: "date",
                classNameInput: "S-K-Form-input",
                name: "date",
                id: "press-date",
                },
                {
                label: "Image Path",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter image path or URL",
                name: "imagePath",
                id: "press-image-path",
                },
                {
                label: "Image Alt",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter image alt text",
                name: "altImg",
                id: "press-alt-img",
                },
            ];
            
        const addBtn = () => {
            setEditIndex(null);
            setDeletePressData(null);
            setViewPressData(null);
            setModalData({
            title: "",
            desc: "",
            location: "",
            date: "",
            imagePath: "",
            altImg: "",
            });
            setIsModalOpen(true);
        };
        
        const editBtn = (item, index) => {
            setEditIndex(index);
            setDeletePressData(null);
            setViewPressData(null);
            setModalData({
                title: item.title,
                desc: item.desc || "",
                location: item.location,
                date: item.date ,
                imagePath: item.image?.path || "",
                altImg: item.image?.altImg || "",
                });
            setIsModalOpen(true);
        };
            const viewBtn = (item) => {
                setViewPressData(item);
                setEditIndex(null);
                setDeletePressData(null);
                setIsModalOpen(true);
            };

            const deleteBtn = (index) => {
                setDeletePressData(index);
                setEditIndex(null);
                setViewPressData(null);
                setIsModalOpen(true);
            };

            const closeBtn = () => {
                setIsModalOpen(false);
                setEditIndex(null);
                setDeletePressData(null);
                setViewPressData(null);
                setModalData({
                title: "",
                desc: "",
                location: "",
                date: "",
                imagePath: "",
                altImg: "",
                });
            };
            const submitBtn = (formData) => {
                const formattedData = {
                title: formData.title,
                desc: formData.desc,
                location: formData.location,
                date: formData.date,
                image: {
                    path: formData.imagePath,
                    altImg: formData.altImg,
                },
                };
                if (editIndex !== null) {
                    setPressReleasesDashboard((current) => {
                    const updated = [...current];
                    updated[editIndex] = formattedData;
                    return updated;
                });
                } else {
                    setPressReleasesDashboard((current) => [...current, formattedData]);
                }
                closeBtn();
            };
            const confirmDelete = (index) => {
                setPressReleasesDashboard((current) => current.filter((_, i) => i !== index));
                closeBtn();
            };
            const formattedViewData = viewPressData
                ? {
                    title: viewPressData.title,
                    desc: viewPressData.desc,
                    location: viewPressData.location,
                    date: viewPressData.date ? viewPressData.date.split("/").reverse().join("-") : "",
                    imagePath: viewPressData.image?.path,
                    altImg: viewPressData.image?.altImg,
                }
                : {...modalData , date: modalData.date ? modalData.date.split("/").reverse().join("-") : ""
                };
        return (
            <>
        <TableDashboard 
            title2="Press Releases"
            addBtn={addBtn}
            children={
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    {/* <th>Image Path</th>
                    <th>Image Alt</th> */}
                    <th>Title</th>
                    <th className='DS_TableLocation'>Location</th>
                    <th>Date</th>
                    {/* <th>Description</th>  */}
                    <th className="O-A-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pressReleasesDashboard.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {/* <td>{item.image.path}</td>
                        <td>{item.image.altImg}</td> */}
                        <td>{item.title}</td>
                        <td className='DS_TableLocation'>{item.location}</td>
                        <td>{item.date}</td>
                        {/* <td>{item.desc}</td>  */}
                        <td className="O-A-tdBtn">
                            <div  className='O-A-flex'>
                            <BtnView Funct={() => viewBtn(item)} />
                            <BtnUpdate Funct={() => editBtn(item, index)}/> 
                            <BtnDelete Funct={() => deleteBtn(index)}  />
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            }
            />
            {isModalOpen && (
                <ModalDashboard
                title={
                    deletePressData !== null
                    ? "Delete Press Release"
                    : viewPressData
                        ? "View Press Release"
                        : editIndex !== null
                        ? "Update Press Release"
                        : "Add Press Release"
                }
                mode={
                    deletePressData !== null
                    ? "delete"
                    : viewPressData
                        ? "view"
                        : "form"
                }
                fields={pressFields}
                data={formattedViewData}
                onSubmit={submitBtn}
                onDelete={() => confirmDelete(deletePressData)}
                onClose={closeBtn}
                image={viewPressData ? viewPressData.image?.path : ""}
                />
            )}
            </>
        )
        }

        export default PressReleasesDashboard
