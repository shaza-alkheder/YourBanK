import { useState } from "react";
import Card from "../../UI/Card/Card";
import ValuesCardData from "../../../data/ValuesCardData.json";
import "./OurValues.css";
import TitleDescription from "../../UI/TitleDescription/TitleDescription"

function OurValues() {
        const [valuesContent] = useState(() => {
        const valuesStored = localStorage.getItem("valuesContent")

        if (valuesStored) {
                return JSON.parse(valuesStored)
        }
        localStorage.setItem("valuesContent", JSON.stringify(ValuesCardData)
        )
        return ValuesCardData
        })

        return (
        <section className="MG-our-vales">
        
        <TitleDescription 
                titleParts={[    
        {
                text: "Our",
                className: ""
        },
        {
                text: "Values",
                className: "DS_ColorLimeGreen"
        }
        ]}
        description="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
        /> 

        <div className="MG-values-cards">

        {valuesContent.map((value) => (
        <Card
                key={value.id}
                title={value.title}
                desc={value.description}
                classNames={{
                        card: "MG-value-card",
                        title: "MG-value-card-title",
                        desc: "MG-value-card-description",
                        }}
        />
        ))}

        </div>


        


        </section>
        )
}

export default OurValues
