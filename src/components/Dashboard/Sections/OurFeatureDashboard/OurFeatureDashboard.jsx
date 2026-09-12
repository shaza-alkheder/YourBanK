import { useEffect, useState } from "react"
import TableDashboard from "../../UI/TableDashboard/TableDashboard"
import "./OurFeatureDashboard.css"
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard"
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView"

const OurFeatureDashboard = () => {
    const [featureData, setFeatureData] = useState(() => {
    const stored = localStorage.getItem("featuresCardData");
        return stored ? JSON.parse(stored) : {OnlineBanking: [], FinancialTools: [], CustomerSupport: [] };
    });

    useEffect(() => {
        localStorage.setItem("featuresCardData", JSON.stringify(featureData));
    }, [featureData]);
    


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        description: "",
        category: "ForIndividuals",
    });

    const [editId, setEditId] = useState(null);
    const [deleteFeatureData, setdeleteFeatureData] = useState(null);
    const [viewFeatureData, setviewFeatureData] = useState(null);

    const featureFields = [
        {
            label: "Title",
            typeInput: "text",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter Title",
            name: "title",
            id: "feature-title",
        },
        {
            label: "Description",
            typeInput: "textarea",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter Description",
            name: "description",
            id: "feature-desc",
            rows: 6,
        },
        {
            label: "Category",
            typeInput: "select",
            classNameInput: "S-K-Form-input",
            name: "category", 
            id: "feature-category",
            options: [
                { value: "OnlineBanking", label: "OnlineBanking" },
                { value: "FinancialTools", label: "FinancialTools" },
                { value: "CustomerSupport", label: "CustomerSupport" }
            ]
        }
    ];

    const addBtn = () => {
        setEditId(null);
        setModalData({
            title: "",
            description: "",
            category: "OnlineBanking"
        });
        setIsModalOpen(true);
    };

    const editBtn = (feature) => {
        setEditId(feature.id);
        setModalData({
            title: feature.title,
            description: feature.desc, 
            category: feature.category,
        });
        setIsModalOpen(true);
    };

    const closeBtn = () => {
        setIsModalOpen(false);
        setEditId(null);
        setdeleteFeatureData(null);
        setviewFeatureData(null);
        setModalData({
            title: "",
            description: "",
            category: "OnlineBanking",
        });
    };

    const deleteBtn = (feature) => {
        setdeleteFeatureData(feature);
        setEditId(null);
        setIsModalOpen(true);
    };

    const submitBtn = (formData) => {
        if (editId !== null) {
            setFeatureData((currentData) => {
                const updatedOnlineBanking = currentData.OnlineBanking.map((feature) => {
                    if (feature.id === editId) {
                        return { 
                            ...feature,
                            title: formData.title, 
                            desc: formData.description,
                        };
                    }
                    return feature;
                });

                const updatedFinancialTools = currentData.FinancialTools.map((feature) => {
                    if (feature.id === editId) {
                        return { 
                            ...feature, 
                            title: formData.title, 
                            desc: formData.description,
                        };
                    }
                    return feature;
                });
                const updatedCustomerSupport = currentData.CustomerSupport.map((feature) => {
                    if (feature.id === editId) {
                        return { 
                            ...feature, 
                            title: formData.title, 
                            desc: formData.description,
                        };
                    }
                    return feature;
                });

                return {
                    ...currentData,
                    OnlineBanking: updatedOnlineBanking,
                    FinancialTools: updatedFinancialTools,
                    CustomerSupport: updatedCustomerSupport,
                };
            });
        } else {
            setFeatureData((currentData) => {
                const targetCategory = formData.category; 
                const currentList = currentData[targetCategory] || [];
                const lastId1 = currentData.OnlineBanking.length > 0 ? currentData.OnlineBanking[currentData.OnlineBanking.length - 1].id : 0;
                const lastId2 = currentData.FinancialTools.length > 0 ? currentData.FinancialTools[currentData.FinancialTools.length - 1].id : 0;
                const lastId3 = currentData.CustomerSupport.length > 0 ? currentData.CustomerSupport[currentData.CustomerSupport.length - 1].id : 0;
                const lastId = lastId1 > lastId2 && lastId1 > lastId3 ? lastId1 : lastId2 >lastId1 && lastId2 > lastId3 ? lastId2 : lastId3

                const newfeature = {
                    id: lastId + 1,
                    title: formData.title,
                    desc: formData.description,
                    category: targetCategory,
                };

                return {
                    ...currentData,
                    [targetCategory]: [...currentList, newfeature]
                };
            });
        }
        closeBtn();
    };

    const deletefeature = (id) => {
        setFeatureData((currentData) => {
            const updatedOnlineBanking = currentData.OnlineBanking.filter((feature) => feature.id !== id);
            const updatedFinancialTools = currentData.FinancialTools.filter((feature) => feature.id !== id);
            const updatedCustomerSupport = currentData.CustomerSupport.filter((feature) => feature.id !== id);

            return {
                ...currentData,
                OnlineBanking: updatedOnlineBanking,
                FinancialTools: updatedFinancialTools,
                CustomerSupport: updatedCustomerSupport
            };
        });
        closeBtn();
    };

    const viewBtn = (feature) => {
        const formattedfeature = {
            ...feature,
            description: feature.desc, 
            category: feature.category
        };
        setviewFeatureData(formattedfeature);
        setEditId(null);
        setdeleteFeatureData(null);
        setIsModalOpen(true);
    };

    return (
        <>
                <TableDashboard
                    title1 = "Our"
                    title2 = "Features"
                    addBtn={addBtn}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th className="O-A-descriptionDisplay">Description</th>
                                <th className="O-A-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4} className="O-A-rowTitle">OnlineBanking</td>
                            </tr>
                            {featureData.OnlineBanking?.map((feature) => {
                                return(
                                    <tr key={feature.id}>
                                        <td>{feature.id}</td>
                                        <td>{feature.title}</td>
                                        <td className="O-A-descriptionDisplay">{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnView Funct={() => viewBtn(feature)} />
                                                <BtnUpdate Funct={() => editBtn(feature)} />
                                                <BtnDelete Funct={() => deleteBtn(feature)} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={4} className="O-A-rowTitle">FinancialTools</td>
                            </tr>
                            {featureData.FinancialTools?.map((feature) => {
                                return(
                                    <tr key={feature.id}>
                                        <td>{feature.id}</td>
                                        <td>{feature.title}</td>
                                        <td className="O-A-descriptionDisplay">{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnView Funct={() => viewBtn(feature)} />
                                                <BtnUpdate Funct={() => editBtn(feature)} />
                                                <BtnDelete Funct={() => deleteBtn(feature)} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={4} className="O-A-rowTitle">CustomerSupport</td>
                            </tr>
                            {featureData.CustomerSupport?.map((feature) => {
                                return(
                                    <tr key={feature.id}>
                                        <td>{feature.id}</td>
                                        <td>{feature.title}</td>
                                        <td className="O-A-descriptionDisplay">{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnView Funct={() => viewBtn(feature)} />
                                                <BtnUpdate Funct={() => editBtn(feature)} />
                                                <BtnDelete Funct={() => deleteBtn(feature)} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </TableDashboard>
                {isModalOpen && (
                    <ModalDashboard
                        title={
                            deleteFeatureData
                                ? "Delete feature"
                                : viewFeatureData
                                    ? "View feature"
                                    : editId !== null
                                        ? "Update feature"
                                        : "Add feature"
                        }
                        mode={
                            deleteFeatureData
                                ? "delete"
                                : viewFeatureData
                                    ? "view"
                                    : "form"
                        }
                        fields={featureFields}
                        data={viewFeatureData || modalData}
                        onSubmit={submitBtn}
                        onDelete={() => deletefeature(deleteFeatureData.id)}
                        onClose={closeBtn}
                    />
                )}
        </>
    )
}

export default OurFeatureDashboard