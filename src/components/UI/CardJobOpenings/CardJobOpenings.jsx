import Button from '../Button/Button'
import './CardJobOpenings.css'
import { FaBriefcase } from "react-icons/fa6";

const CardJobOpenings = ({job}) => {
    return (
        <div className='DS_CardJobOpenings'>
            <h2 className="DS_jobTitle">{job.title}</h2>
            <div className="DS_jobTags">
                <span className="DS_jobTag">Location: {job.location}</span>
                <span className="DS_jobTag">Department: {job.department}</span>
            </div>

        <h3 className='DS_TitleAbout'>About This Job</h3>
        <p className='DS_DescAbout'>{job.about}</p>

        <h3 className='DS_TitleRequire'>Requirements & Qualifications</h3>
        <ul className="DS_jobRequirementsList">
            {job.requirements.map((req, index) => (
                <li key={index} className="DS_jobReqItem">
                    <img className='DS_WorkBag' src="/assets/img/CareersPage/WorkBag.webp" alt="WorkBag icon" />
                    <span className='DS_ReqText'>{req}</span>
                </li>
            ))}
        </ul>

        <Button 
        className="DS_BtnApply"
        content ="Apply Now"
        /> 
        </div>
    )
    }

export default CardJobOpenings
