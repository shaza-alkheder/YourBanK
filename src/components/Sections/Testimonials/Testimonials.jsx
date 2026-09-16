import { useState, useEffect, useRef } from "react";
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
    
    const sliderRef = useRef(null);

useEffect(() => {
    const TestimonialsStorageChange = (event) => {
        if (event.key === "testimonialsData") {
            const savedData = localStorage.getItem("testimonialsData");
            if (savedData) {
                setTestimonials(JSON.parse(savedData));
            }
        }
    };
    const savedData = localStorage.getItem("testimonialsData");
    if (savedData) {
        setTestimonials(JSON.parse(savedData));
    } else {
        localStorage.setItem("testimonialsData", JSON.stringify(testimonialsData));
        setTestimonials(testimonialsData);
    }
    window.addEventListener("storage", TestimonialsStorageChange);
    return () => {
        window.removeEventListener("storage", TestimonialsStorageChange);
    };
}, []);
    const number = () => {
    if (window.innerWidth <= 992) return 1;
    return 3;
};
    const currentTestimonials = testimonials[activeTab] || [];
    const maxIndex = Math.max(0, currentTestimonials.length - number());
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= maxIndex;
    const handleNext = () => {
        if (currentIndex >= maxIndex) return;
        if (sliderRef.current) {
            const card = sliderRef.current.querySelector('.DS_testimonialCard');
            if (card) {
                const cardWidth = card.offsetWidth;
                const style = window.getComputedStyle(sliderRef.current);
                const gap = parseFloat(style.gap) || (window.innerWidth <= 992 ? 60 : window.innerWidth <= 1440 ? 60 : 80);
                
                sliderRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
            }
        }
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const handlePrev = () => {
        if (currentIndex <= 0) return;
        if (sliderRef.current) {
            const card = sliderRef.current.querySelector('.DS_testimonialCard');
            if (card) {
                const cardWidth = card.offsetWidth;
                const style = window.getComputedStyle(sliderRef.current);
                const gap = parseFloat(style.gap) || (window.innerWidth <= 992 ? 60 : window.innerWidth <= 1440 ? 60 : 80);
                
                sliderRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
            }
        }
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
                        content="For Individuals"
                        onClick={() => { setActiveTab("individuals"); setCurrentIndex(0); if(sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' }); }}
                    /> 
                    <Button 
                        className={`DS_styleTest ${activeTab === "businesses" ? "active" : ""}`}
                        content="For Businesses"
                        onClick={() => { setActiveTab("businesses"); setCurrentIndex(0); if(sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' }); }}
                    /> 
                </div>
            </div>

            <div className="DS_slider">
                <div 
                    ref={sliderRef}
                    key={activeTab}
                    className="DS_testimonialsSlider"
                    style={{ 
                        overflowX: 'auto', 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none' 
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

                <div className="DS_arrows"> 
                    <button className="DS_Arrow"  onClick={handlePrev}><FaArrowLeft className={`DS_FaArrow ${isAtStart ? "disabled-arrow" : ""}`}/></button>
                    <button className="DS_Arrow"  onClick={handleNext}><FaArrowRight  className={`DS_FaArrow ${isAtEnd ? "disabled-arrow" : ""}`}/></button>              
                </div>
            </div>
        </div>
    );
};

export default Testimonials;