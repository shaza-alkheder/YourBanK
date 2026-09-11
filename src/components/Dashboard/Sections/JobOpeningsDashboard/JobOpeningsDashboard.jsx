    import  { useState, useEffect } from 'react';
    import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
    import './JobOpeningsDashboard.css'
    import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
    import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
    import jobOpeningsData from "../../../../data/JobOpeningsData.json"; 
    import BtnView from "../../UI/BtnDashboard/BtnView/BtnView";
    import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard";


    const JobOpeningsDashboard = () => {
    const [jobOpeningsDashboard, setJobOpeningsDashboard] = useState(() => {
        const storedJobOpeningsData = localStorage.getItem('jobOpeningsData');
            if (storedJobOpeningsData) {
                try {
                    return JSON.parse(storedJobOpeningsData);
                } catch (error) {
                    console.error("Error parsing data:", error);
                }
            }
            return jobOpeningsData || [];
        });
        useEffect(() => {
            localStorage.setItem("jobOpeningsData", JSON.stringify(jobOpeningsDashboard));
        }, [jobOpeningsDashboard]);
        console.log(jobOpeningsDashboard)
        
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalData, setModalData] = useState({
            title: "",
            location: "",
            department: "",
            about: "",
            requirements: ""
        });
        const [editIndex, setEditIndex] = useState(null);
        const [deleteJobData, setDeleteJobData] = useState(null);
        const [viewJobData, setViewJobData] = useState(null);
        const jobFields = [
            {
                label: "Job Title",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter job title",
                name: "title",
                id: "job-title",
            },
            {
                label: "Location",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter location",
                name: "location",
                id: "job-location",
            },
            {
                label: "Department",
                typeInput: "text",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter department",
                name: "department",
                id: "job-department",
            },
            {
                label: "About Job",
                typeInput: "textarea",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter job description",
                name: "about",
                id: "job-about",
                rows: 3,
            },
            {
                label: "Requirements (one per line)",
                typeInput: "textarea",
                classNameInput: "S-K-Form-input",
                placeholderInput: "Enter requirements separated by new lines",
                name: "requirements",
                id: "job-requirements",
                rows: 4,
            },
        ];
        const addBtn = () => {
        setEditIndex(null);
        setDeleteJobData(null);
        setViewJobData(null);
        setModalData({
            title: "",
            location: "",
            department: "",
            about: "",
            requirements: ""
        });
        setIsModalOpen(true);
    };

    const editBtn = (item, index) => {
        setEditIndex(index);
        setDeleteJobData(null);
        setViewJobData(null);
        setModalData({
            title: item.title,
            location: item.location,
            department: item.department,
            about: item.about,
            requirements: Array.isArray(item.requirements) ? item.requirements.join("\n") : item.requirements || "",
        });
        setIsModalOpen(true);
    };

    const viewBtn = (item) => {
        setViewJobData(item);
        setEditIndex(null);
        setDeleteJobData(null);
        setIsModalOpen(true);
    };

    const deleteBtn = (index) => {
        setDeleteJobData(index);
        setEditIndex(null);
        setViewJobData(null);
        setIsModalOpen(true);
    };

    const closeBtn = () => {
        setIsModalOpen(false);
        setEditIndex(null);
        setDeleteJobData(null);
        setViewJobData(null);
        setModalData({
            title: "",
            location: "",
            department: "",
            about: "",
            requirements: "",
        });
    };
    const submitBtn = (formData) => {
        const requirementsArray = typeof formData.requirements === "string" 
            ? formData.requirements.split("\n").filter(req => req.trim() !== "")
            : formData.requirements;

        const formattedData = {
            title: formData.title,
            location: formData.location,
            department: formData.department,
            about: formData.about,
            requirements: requirementsArray,
        };
        if (editIndex !== null) {
            setJobOpeningsDashboard((current) => {
                const updated = [...current];
                updated[editIndex] = formattedData;
                return updated;
            });
        } else {
            setJobOpeningsDashboard((current) => [...current, formattedData]);
        }
        closeBtn();
    };
    const confirmDelete = (index) => {
        setJobOpeningsDashboard((current) => current.filter((_, i) => i !== index));
        closeBtn();
    };

    const formattedViewData = viewJobData
        ? {
            title: viewJobData.title,
            location: viewJobData.location,
            department: viewJobData.department,
            about: viewJobData.about,
            requirements: Array.isArray(viewJobData.requirements) ? viewJobData.requirements.join("\n") : viewJobData.requirements,
        }
        : modalData;
    return (
        <>
    <TableDashboard 
            title2="Job Openings"
            addBtn={addBtn}
            children={
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Job Title</th>
                    <th>Location</th>
                    {/* <th>Department</th>
                    <th>About Job</th>
                    <th>Requirements</th> */}
                    <th className="O-A-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobOpeningsDashboard.map((item, index) => (
                    <tr key={index}>
                        <td >{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.location}</td>
                        {/* <td>{item.department}</td>
                        <td>{item.about}</td>
                        <td>
                        <ul>
                            {item.requirements?.map((req, reqIndex) => (
                            <li key={reqIndex}>
                                {req}
                            </li>
                            ))}
                        </ul>
                        </td> */}

                            <td className="O-A-tdBtn">
                                <div className='O-A-flex'>
                                    <BtnView Funct={() => viewBtn(item)} />
                                    <BtnUpdate Funct={() => editBtn(item, index)} /> 
                                    <BtnDelete Funct={() => deleteBtn(index)} />
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
                        deleteJobData !== null
                            ? "Delete Job Opening"
                            : viewJobData
                                ? "View Job Opening"
                                : editIndex !== null
                                    ? "Update Job Opening"
                                    : "Add Job Opening"
                    }
                    mode={
                        deleteJobData !== null
                            ? "delete"
                            : viewJobData
                                ? "view"
                                : "form"
                    }
                    fields={jobFields}
                    data={formattedViewData}
                    onSubmit={submitBtn}
                    onDelete={() => confirmDelete(deleteJobData)}
                    onClose={closeBtn}
                />
            )}
        </>
    )
    }

    export default JobOpeningsDashboard
