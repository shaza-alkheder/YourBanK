    import  { useState, useEffect } from 'react';
    import TableDashboard from "../../Layout/TableDashboard/TableDashboard"
    import './JobOpeningsDashboard.css'
    import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
    import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"
    import jobOpeningsData from "../../../../data/JobOpeningsData.json"; 


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
        
    return (
        <>
    <TableDashboard 
            title2="Job Openings List"
            children={
                <table className="careers-table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Job Title</th>
                    <th>Location</th>
                    <th>Department</th>
                    <th>About Job</th>
                    {/* <th>Requirements</th> */}
                    <th className="O-A-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobOpeningsDashboard.map((item, index) => (
                    <tr key={index}>
                        <td >{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.location}</td>
                        <td>{item.department}</td>
                        <td>{item.about}</td>
                        {/* <td>
                        <ul>
                            {item.requirements?.map((req, reqIndex) => (
                            <li key={reqIndex} >
                                {req}
                            </li>
                            ))}
                        </ul>
                        </td> */}

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

    export default JobOpeningsDashboard
