import { useEffect, useState } from "react"
import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
import ContaninerDashboard from "../../UI/ContaninerDashboard/ContaninerDashboard"
import "./OurProductDashboard.css"
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"

const OurProductDashboard = () => {
    const [ProductData , setProductData] = useState(JSON.parse(localStorage.getItem("OurProducCardtData")))

    useEffect(() => {
        localStorage.setItem("OurProducCardtData", JSON.stringify(ProductData));
    }, [ProductData]);

    const deleteOurProductForIndividuals = (id) => {
        const updateDataProductForIndividuals = ProductData.ForIndividuals.filter((pro) => pro.id !== id)
        let updateData = {...ProductData}
        updateData.ForIndividuals = updateDataProductForIndividuals
        setProductData(updateData)
    }
    const deleteOurProductForBusinesses = (id) => {
        const updateDataProductForBusinesses = ProductData.ForBusinesses.filter((pro) => pro.id !== id)
        let updateData = {...ProductData}
        updateData.ForBusinesses = updateDataProductForBusinesses
        setProductData(updateData)
    }
    return (
        <>
            <ContaninerDashboard>
                <TableDashboard
                    title1 = "Our"
                    title2 = "Product"
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
                                return(
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnUpdate /> 
                                                <BtnDelete 
                                                    Funct={() => deleteOurProductForIndividuals(product.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={4} className="O-A-rowTitle">ForBusinesses</td>
                            </tr>
                            {ProductData.ForBusinesses?.map((product) => {
                                return(
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnUpdate />
                                                <BtnDelete 
                                                    Funct={() => deleteOurProductForBusinesses(product.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </TableDashboard>
            </ContaninerDashboard>
        </>
    )
}

export default OurProductDashboard