import TitleDescription from "../TitleDescription/TitleDescription"
import "./OurFeatures.css"

const OurFeatures = () => {
    return (
        <section>
            <TitleDescription 
                className="OA_style"
                titleParts={[    
                    {
                        text: "Our",
                        className: ""
                    },
                    {
                        text: "Features",
                        className: "DS_ColorLimeGreen"
                    }
                ]}
                description= "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
            />
        </section>
    )
}

export default OurFeatures