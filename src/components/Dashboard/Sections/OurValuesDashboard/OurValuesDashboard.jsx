import { useEffect, useState } from "react";
import ValuesCardData from "../../../../data/ValuesCardData.json"
import TableDashboard from "../../UI/TableDashboard/TableDashboard"
import ModalDashboard from "../../UI/ModalDashboard/ModalDashboard"
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
import BtnView from "../../UI/BtnDashboard/BtnView/BtnView"
import "./OurValuesDahsboard.css"

function OurValuesDashboard() {
    const [values, setValues] = useState(() => {

        const storedValues = localStorage.getItem("valuesContent")
        if (storedValues) {
            return JSON.parse(storedValues);
        }
        localStorage.setItem("valuesContent",  JSON.stringify(ValuesCardData))
        return ValuesCardData;
    })

    const [modalType, setModalType] = useState(null)
    const [selectedValue, setSelectedValue] = useState(null)

    useEffect(() => {

        localStorage.setItem("valuesContent",  JSON.stringify(values))
    }, [values])

    const valueFields = [
        {
            label: "Title",
            typeInput: "text",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter title",
            name: "title",
            id: "value-title"
        },

        {
            label: "Description",
            typeInput: "textarea",
            classNameInput: "S-K-Form-input",
            placeholderInput: "Enter description",
            name: "description",
            id: "value-description",
            rows: 6
        }
    ];


    const handleAdd = () => {
        setSelectedValue({
            title: "",
            description: ""
        })

        setModalType("add")
    }

    const handleView = (value) => {
        setSelectedValue(value)
        setModalType("view")
    }

    const handleEdit = (value) => {
        setSelectedValue(value)
        setModalType("edit")
    }

    const handleDelete = (value) => {
        setSelectedValue(value)
        setModalType("delete")
    }

    const handleClose = () => {
        setModalType(null)
        setSelectedValue(null)
    }


    const handleSubmit = (formData) => {
        if (modalType === "edit") {

            setValues((currentValues) => {

                return currentValues.map((value) => {

                    if (value.id === selectedValue.id) {

                        return {
                            ...value,
                            title: formData.title,
                            description: formData.description
                        }
                    }

                    return value
                })
            })
        }

        // Add
        else {

            setValues((currentValues) => {

                const lastId =
                    currentValues.length > 0
                        ? currentValues[currentValues.length - 1].id
                        : 0

                const newValue = {
                    id: lastId + 1,
                    title: formData.title,
                    description: formData.description
                }

                return [
                    ...currentValues,
                    newValue
                ]
            })
        }

        handleClose()
    }

    const confirmDelete = () => {
        setValues((currentValues) => {
            return currentValues.filter(
                (value) => value.id !== selectedValue.id
            )
        })

        handleClose()
    }

    return (
        <>

            <TableDashboard
                title1="Our"
                title2="Values"
                addBtn={handleAdd}
            >
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th className="value-description-column">Description</th>
                            <th className="O-A-action"> Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {values.map((value) => (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td className="value-description-column">{value.description}</td>
                                <td className="O-A-tdBtn">
                                    <div className="O-A-flex">
                                    <BtnView
                                        Funct={() => handleView(value)}
                                    />
                                    <BtnUpdate
                                        Funct={() => handleEdit(value)}
                                    />
                                    <BtnDelete
                                        Funct={() => handleDelete(value)}
                                    />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableDashboard>

            {modalType && (

                <ModalDashboard
                    title={
                        modalType === "add"
                            ? "Add Our Value"
                            : modalType === "edit"
                            ? "Update Our Value"
                            : modalType === "view"
                            ? "View Our Value"
                            : "Delete Our Value"
                    }

                    mode={
                        modalType === "delete"
                            ? "delete"
                            : modalType === "view"
                            ? "view"
                            : "form"
                    }
                    fields={valueFields}
                    data={selectedValue}
                    onSubmit={handleSubmit}
                    onDelete={confirmDelete}
                    onClose={handleClose}
                />
            )}
        </>
    )
}

export default OurValuesDashboard