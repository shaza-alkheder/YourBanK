import { useState ,useEffect } from "react";
import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import testimonialsData from "../../../data/TestimonialsCardData.json";
import './Testimonials.css'
import Button from "../../UI/Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from "../../UI/Card/Card";

    const Testimonials = () => {
        const [activeTab, setActiveTab] = useState("individuals");
        const [testimonials, setTestimonials] = useState({ individuals: [], businesses: [] });
        const [currentIndex, setCurrentIndex] = useState(0);
        useEffect(() => {
        const savedData = localStorage.getItem("testimonialsData");

        if (savedData) {
            setTestimonials(JSON.parse(savedData));
        } else {
            localStorage.setItem("testimonialsData", JSON.stringify(testimonialsData));
            setTestimonials(testimonialsData);
        }
    }, []);

    const currentTestimonials = testimonials[activeTab] || [];
const maxIndex = currentTestimonials.length > 3 ? currentTestimonials.length - 3 : 0;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };
    return (
        <div className="DS_Testimonials">
            <div className="DS_Container">           
                <TitleDescription 
                className="DS_SizeTitleDescription"
                titleParts={[    
                    {
                        text: "Our",
                        className: ""
                    },
                    {
                        text: "Testimonials",
                        className: "DS_ColorLimeGreen"
                    }
                ]}
                description="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
            /> 
            <div className="DS_btnFilter">
                <Button 
                    className={`DS_styleTest ${activeTab === "individuals" ? "active" : ""}`}
                    content ="For Individuals"
                    onClick={() => setActiveTab("individuals")}
                    /> 
                <Button 
                className={`DS_styleTest ${activeTab === "businesses" ? "active" : ""}`}
                content ="For Businesses"
                onClick={() => setActiveTab("businesses")}
                /> 
            </div>

            </div>
<div className="DS_slider">
    <div 
        className="DS_testimonialsSlider"
        style={{
            transform: `translateX(calc(${currentIndex} * (-100% - 40px)))`
        }}
    >
        {currentTestimonials.map((item, index) => {
            const isMiddle = index === currentIndex + 1;
            
            return (
                <Card 
                    key={index}
                    image={{ path: "/assets/img/HomePage/doubleQuotes.webp", altImg: "quote icon" }}
                    desc={item.opinion}
                    title={item.name}
                    classNames={{
                        card: `DS_testimonialCard ${isMiddle ? "active-card" : ""}`,
                        imageDiv: "DS_quoteImageDiv",
                        image: "DS_quoteIcon",
                        imgTitleDiv: "DS_titleWrapper", 
                        title: "DS_clientName",
                        desc: "DS_opinionText"
                    }}
                />
            );
        })}
    </div>
            <div class="DS_arrows"> 
                        <button  class="left_arrow" onClick={handlePrev}><FaArrowLeft  /></button>
                        <button class="right_arrow" onClick={handleNext}><FaArrowRight /></button>                   
                    </div>
                    </div>


        </div>
    )
    }

export default Testimonials
