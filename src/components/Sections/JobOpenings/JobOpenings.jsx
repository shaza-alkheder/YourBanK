import { useState, useEffect } from 'react';
import './JobOpenings.css'
import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import jobOpeningsData from '../../../data/JobOpeningsData.json'; 
import CardJobOpenings from '../../UI/CardJobOpenings/CardJobOpenings';

const JobOpenings = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const jobOpeningsStorageChange = (event) => {
            if (event.key === "jobOpeningsData") {
                const savedData = localStorage.getItem("jobOpeningsData");
                if (savedData) {
                    setJobs(JSON.parse(savedData));
                }
            }
    };

        let storedJobs = localStorage.getItem('jobOpeningsData');
        if (!storedJobs) {
            localStorage.setItem('jobOpeningsData', JSON.stringify(jobOpeningsData));
            storedJobs = JSON.stringify(jobOpeningsData);
        }
        setJobs(JSON.parse(storedJobs));
        window.addEventListener("storage",  jobOpeningsStorageChange);
        return () => {
            window.removeEventListener("storage",  jobOpeningsStorageChange);
        };
        }, []);

    return (
        <div className='DS_JobOpenings'>
            <TitleDescription   
                className="DS_TitleDescriptionJob"
                titleParts={[    
                    {
                        text: "Job Openings",
                        className: "DS_ColorLimeGreen"
                    }
                ]}
                description="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
            /> 

            <div className="DS_jobsContainer">
                {jobs.map((jobItem, index) => (
                    <CardJobOpenings key={index} job={jobItem} />
                ))}
                </div>
                    </div>
    )
    }

export default JobOpenings
