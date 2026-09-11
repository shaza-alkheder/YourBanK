import  { useState, useEffect } from 'react';
        import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
        import './PressReleasesDashboard.css'
        import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
        import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
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

        console.log(pressReleasesDashboard)
        
        return (
            <>
        <TableDashboard 
            // title1="Press Releases"
            title2="Press Releases"
            children={
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Image Path</th>
                    <th>Alt Text</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Description</th> 
                    <th className="O-A-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pressReleasesDashboard.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.image.path}</td>
                        <td>{item.image.altImg}</td>
                        <td>{item.title}</td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>{item.desc}</td> 
                        <td className="O-A-tdBtn">
                        <BtnUpdate /> 
                        <BtnDelete />
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            }
            />

            </>
        )
        }

        export default PressReleasesDashboard
