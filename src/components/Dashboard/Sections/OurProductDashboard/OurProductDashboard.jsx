import { useEffect, useState } from "react"
import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
import "./OurProductDashboard.css"
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView"
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard"

const OurProductDashboard = () => {
    const [ProductData, setProductData] = useState(() => {
        const saved = localStorage.getItem("OurProducCardtData");
        return saved ? JSON.parse(saved) : { ForIndividuals: [], ForBusinesses: [] };
    });

    useEffect(() => {
        localStorage.setItem("OurProducCardtData", JSON.stringify(ProductData));
    }, [ProductData]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        description: "",
        category: "ForIndividuals",
        imgSrc: ""
    });

    const [editId, setEditId] = useState(null);
    const [deleteProductData, setDeleteProductData] = useState(null);
    const [viewProductData, setviewProductData] = useState(null);

    const productFields = [
        {
            label: "Title",
            typeInput: "text",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter Title",
            name: "title",
            id: "product-title",
        },
        {
            label: "Description",
            typeInput: "textarea",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter Description",
            name: "description",
            id: "product-desc",
            rows: 6,
        },
        {
            label: "Category",
            typeInput: "select",
            classNameInput: "S-K-Form-input",
            name: "category", 
            id: "product-category",
            options: [
                { value: "ForIndividuals", label: "For Individuals" },
                { value: "ForBusinesses", label: "For Businesses" }
            ]
        },
        {
            label: "ImageUrl",
            typeInput: "text",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter Image Url",
            name: "imgSrc",
            id: "product-img",
        }
    ];

    const addBtn = () => {
        setEditId(null);
        setModalData({
            title: "",
            description: "",
            category: "ForIndividuals",
            imgSrc: "/assets/img/HomePage/IconCardProduct1.webp"
        });
        setIsModalOpen(true);
    };

    const editBtn = (product) => {
        setEditId(product.id);
        setModalData({
            title: product.title,
            description: product.desc, 
            category: product.category || "ForIndividuals",
            imgSrc: product.imgSrc || "" 
        });
        setIsModalOpen(true);
    };

    const closeBtn = () => {
        setIsModalOpen(false);
        setEditId(null);
        setDeleteProductData(null);
        setviewProductData(null);
        setModalData({
            title: "",
            description: "",
            category: "ForIndividuals",
            imgSrc: ""
        });
    };

    const deleteBtn = (product) => {
        setDeleteProductData(product);
        setEditId(null);
        setIsModalOpen(true);
    };

    const submitBtn = (formData) => {
        if (editId !== null) {
            setProductData((currentData) => {
                const updatedIndividuals = currentData.ForIndividuals.map((product) => {
                    if (product.id === editId) {
                        return { 
                            ...product,
                            title: formData.title, 
                            desc: formData.description,
                            imgSrc: formData.imgSrc
                        };
                    }
                    return product;
                });

                const updatedBusinesses = currentData.ForBusinesses.map((product) => {
                    if (product.id === editId) {
                        return { 
                            ...product, 
                            title: formData.title, 
                            desc: formData.description,
                            imgSrc: formData.imgSrc 
                        };
                    }
                    return product;
                });

                return {
                    ...currentData,
                    ForIndividuals: updatedIndividuals,
                    ForBusinesses: updatedBusinesses
                };
            });
        } else {
            setProductData((currentData) => {
                const targetCategory = formData.category || "ForIndividuals"; 
                const currentList = currentData[targetCategory] || [];
                const lastId = currentList.length > 0 ? currentList[currentList.length - 1].id : 0;

                const newProduct = {
                    id: lastId + 1,
                    title: formData.title,
                    desc: formData.description,
                    category: targetCategory,
                    imgSrc: formData.imgSrc
                };

                return {
                    ...currentData,
                    [targetCategory]: [...currentList, newProduct]
                };
            });
        }
        closeBtn();
    };

    const deleteProduct = (id) => {
        setProductData((currentData) => {
            const updatedIndividuals = currentData.ForIndividuals.filter((product) => product.id !== id);
            const updatedBusinesses = currentData.ForBusinesses.filter((product) => product.id !== id);

            return {
                ...currentData,
                ForIndividuals: updatedIndividuals,
                ForBusinesses: updatedBusinesses
            };
        });
        closeBtn();
    };

    const viewBtn = (product) => {
        const formattedProduct = {
            ...product,
            description: product.desc, 
            category: product.category || "ForIndividuals"
        };
        setviewProductData(formattedProduct);
        setEditId(null);
        setDeleteProductData(null);
        setIsModalOpen(true);
    };

    return (
        <>
            <TableDashboard
                title1="Our"
                title2="Product"
                addBtn={addBtn}
            >
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th className="O-A-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} className="O-A-rowTitle">ForIndividuals</td>
                        </tr>
                        {ProductData.ForIndividuals?.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.desc}</td>
                                    <td className="O-A-tdBtn">
                                        <div className="O-A-flex">
                                            <BtnView Funct={() => viewBtn(product)} />
                                            <BtnUpdate Funct={() => editBtn(product)} />
                                            <BtnDelete Funct={() => deleteBtn(product)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={4} className="O-A-rowTitle">ForBusinesses</td>
                        </tr>
                        {ProductData.ForBusinesses?.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.desc}</td>
                                    <td className="O-A-tdBtn">
                                        <div className="O-A-flex">
                                            <BtnView Funct={() => viewBtn(product)} />
                                            <BtnUpdate Funct={() => editBtn(product)} />
                                            <BtnDelete Funct={() => deleteBtn(product)} />
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
                        deleteProductData
                            ? "Delete Product"
                            : viewProductData
                                ? "View Product"
                                : editId !== null
                                    ? "Update Product"
                                    : "Add Product"
                    }
                    mode={
                        deleteProductData
                            ? "delete"
                            : viewProductData
                                ? "view"
                                : "form"
                    }
                    fields={productFields}
                    data={viewProductData || modalData}
                    onSubmit={submitBtn}
                    onDelete={() => deleteProduct(deleteProductData.id)}
                    onClose={closeBtn}
                />
            )}
        </>
    )
}

export default OurProductDashboard