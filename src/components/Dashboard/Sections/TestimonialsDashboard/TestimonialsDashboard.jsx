import { useState, useEffect } from 'react';
import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import './TestimonialsDashboard.css';
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";
import testimonialsData from "../../../../data/TestimonialsCardData.json";

const TestimonialsDashboard = () => {
    const [testimonialsDashboard, setTestimonialsDashboard] = useState(() => {
        const storedTestimonialData = localStorage.getItem('testimonialsData');
        if (storedTestimonialData) {
            try {
                return JSON.parse(storedTestimonialData);
            } catch (error) {
                console.error("Error parsing data:", error);
            }
        }
        return testimonialsData || { individuals: [], businesses: [] };
    });
        useEffect(() => {
        localStorage.setItem("testimonialsData", JSON.stringify(testimonialsDashboard));
    }, [testimonialsDashboard]);

    const [isModalTestiOpen, setIsModalTestiOpen] = useState(false);
    const [modalTestiData, setModalTestiData] = useState({
        name: "",
        opinion: "",
        category: "",
    });
    
    const [editInfo, setEditInfo] = useState({ category: null, index: null });
    const [deleteInfo, setDeleteInfo] = useState({ category: null, index: null });
    const [viewData, setViewData] = useState(null);

    const testimonialFields = [
        {
            label: "Client Name",
            typeInput: "text",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter name",
            name: "name",
            id: "testimonial-name",
        },
        {
            label: "Opinion",
            typeInput: "textarea",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter opinion text",
            name: "opinion",
            id: "testimonial-opinion",
            rows: 4,
        },
    ];


    const addBtn = (categoryType) => {
        setEditInfo({ category: null, index: null });
        setDeleteInfo({ category: null, index: null });
        setViewData(null);
        setModalTestiData({
            name: "",
            opinion: "",
            category: categoryType, 
        });
        setIsModalTestiOpen(true);
    };

    const editBtn = (item, category, index) => {
        setEditInfo({ category, index });
        setDeleteInfo({ category: null, index: null });
        setViewData(null);

        setModalTestiData({
            name: item.name,
            opinion: item.opinion,
            category: category,
        });
        setIsModalTestiOpen(true);
    };

    const viewBtn = (item) => {
        setViewData(item);
        setEditInfo({ category: null, index: null });
        setDeleteInfo({ category: null, index: null });
        setIsModalTestiOpen(true);
    };

    const deleteBtn = (category, index) => {
        setDeleteInfo({ category, index });
        setEditInfo({ category: null, index: null });
        setViewData(null);
        setIsModalTestiOpen(true);
    };

    const closeBtn = () => {
        setIsModalTestiOpen(false);
        setEditInfo({ category: null, index: null });
        setDeleteInfo({ category: null, index: null });
        setViewData(null);
        setModalTestiData({
            name: "",
            opinion: "",
            category: "",
        });
    };

const submitBtn = (formData) => {
    const category = modalTestiData.category || "individuals";
    const newItem = {
        name: formData.name,
        opinion: formData.opinion,
    };
    setTestimonialsDashboard((current) => {
        const updatedState = { ...current };
        if (editInfo.category !== null && editInfo.index !== null) {
            const updatedList = [...updatedState[category]];
            updatedList[editInfo.index] = newItem;
            updatedState[category] = updatedList;
        } else {
            updatedState[category] = [...(updatedState[category] || []), newItem];
        }
        return updatedState;
    });
    closeBtn();
};

    const deleteTesti = () => {
        if (deleteInfo.category !== null && deleteInfo.index !== null) {
            setTestimonialsDashboard((current) => {
                const updatedCategoryList = current[deleteInfo.category].filter((_, i) => i !== deleteInfo.index);
                return {
                    ...current,
                    [deleteInfo.category]: updatedCategoryList
                };
            });
        }
        closeBtn();
    };

    const formattedViewData = viewData
        ? {
            name: viewData.name,
            opinion: viewData.opinion,
        }
        : modalTestiData;

    return (
        <>
            <TableDashboard 
                title1="Individuals"
                title2="Testimonials"
                addBtn={() => addBtn('individuals')} 
                children={
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Client Name</th>
                                <th>Opinion</th>
                                <th className="O-A-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonialsDashboard.individuals?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.opinion}</td>
                                    <td className="O-A-tdBtn">
                                        <BtnView Funct={() => viewBtn(item)} />
                                        <BtnUpdate Funct={() => editBtn(item, 'individuals', index)} /> 
                                        <BtnDelete Funct={() => deleteBtn('individuals', index)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            />

            <TableDashboard 
                title1="Businesses"
                title2="Testimonials"
                addBtn={() => addBtn('businesses')}
                children={
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Business Representative</th>
                                <th>Opinion</th>
                                <th className="O-A-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonialsDashboard.businesses?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.opinion}</td>
                                    <td className="O-A-tdBtn">
                                        <BtnView Funct={() => viewBtn(item)} />
                                        <BtnUpdate Funct={() => editBtn(item, 'businesses', index)} /> 
                                        <BtnDelete Funct={() => deleteBtn('businesses', index)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            />

            {isModalTestiOpen && (
                <ModalDashboard
                    title={
                        deleteInfo.category !== null
                            ? "Delete Testimonial"
                            : viewData
                                ? "View Testimonial"
                                : editInfo.category !== null
                                    ? "Update Testimonial"
                                    : "Add Testimonial"
                    }
                    mode={
                        deleteInfo.category !== null
                            ? "delete"
                            : viewData
                                ? "view"
                                : "form"
                    }
                    fields={testimonialFields}
                    data={formattedViewData}
                    onSubmit={submitBtn}
                    onDelete={deleteTesti}
                    onClose={closeBtn}
                />
            )}
        </>
    );
};

export default TestimonialsDashboard;