import './TitleDescription.css'

function TitleDescription({ Welcome,className = "", titleParts = [], description }) {
    return (
        <div className={`DS_TitleDescription ${className}`}>
            {Welcome ?<p className="DS_Welcome" > {Welcome} </p>  : "" }
            <h2 className="DS_title">
                {titleParts.map((part, index) => (
                    <span key={index} className={part.className || ""}>
                        {part.text}{" "} 
                    </span>
                ))}
            </h2>

            {description ?<p className="DS_description" > {description} </p>  : "" }
    
        </div>
    );
}

export default TitleDescription;


{/*Example
    <TitleDescription 
    className="DS_style"
    titleParts={[    
        {
            text: "Welcome to YourBank Empowering Your",
            className: ""
        },
        {
            text: "Financial Journey",
            className: "DS_ColorLimeGreen"
        }
    ]}
    description="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
/> 
*/}