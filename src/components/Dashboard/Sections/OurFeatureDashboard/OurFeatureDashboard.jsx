import { useEffect, useState } from "react"
import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
import "./OurFeatureDashboard.css"
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"

const OurFeatureDashboard = () => {
    const [featureData , setFeatureData] = useState(JSON.parse(localStorage.getItem("featuresCardData")))

    useEffect(() => {
        localStorage.setItem("featuresCardData", JSON.stringify(featureData));
    }, [featureData]);
    
    const deleteOurFeaturesOnlineBanking = (id) => {
        const updateDataFeaturesOnlineBanking = featureData.OnlineBanking.filter((pro) => pro.id !== id)
        let updateData = {...featureData}
        updateData.OnlineBanking = updateDataFeaturesOnlineBanking
        setFeatureData(updateData)
    }
    const deleteOurFeaturesFinancialTools = (id) => {
        const updateDataFeaturesFinancialTools = featureData.FinancialTools.filter((pro) => pro.id !== id)
        let updateData = {...featureData}
        updateData.FinancialTools = updateDataFeaturesFinancialTools
        setFeatureData(updateData)
    }
    const deleteOurFeaturesCustomerSupport = (id) => {
        const updateDataFeaturesCustomerSupport = featureData.CustomerSupport.filter((pro) => pro.id !== id)
        let updateData = {...featureData}
        updateData.CustomerSupport = updateDataFeaturesCustomerSupport
        setFeatureData(updateData)
    }
    return (
        <>
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
                                <td colSpan={4} className="O-A-rowTitle">OnlineBanking</td>
                            </tr>
                            {featureData.OnlineBanking?.map((feature) => {
                                return(
                                    <tr key={feature.id}>
                                        <td>{feature.id}</td>
                                        <td>{feature.title}</td>
                                        <td>{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnUpdate /> 
                                                <BtnDelete 
                                                    Funct={() => deleteOurFeaturesOnlineBanking(feature.id)}
                                                />
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
                                        <td>{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnUpdate />
                                                <BtnDelete 
                                                    Funct={() => deleteOurFeaturesFinancialTools(feature.id)}
                                                />
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
                                        <td>{feature.desc}</td>
                                        <td className="O-A-tdBtn">
                                            <div className="O-A-flex">
                                                <BtnUpdate />
                                                <BtnDelete 
                                                    Funct={() => deleteOurFeaturesCustomerSupport(feature.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </TableDashboard>
        </>
    )
}

export default OurFeatureDashboard