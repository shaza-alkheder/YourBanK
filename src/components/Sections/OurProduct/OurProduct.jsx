// import { MdArrowOutward } from "react-icons/md"
import React, { useEffect, useState } from "react"
import Button from "../../UI/Button/Button"
import Card from "../../UI/Card/Card"
import TitleDescription from "../../UI/TitleDescription/TitleDescription"
import "./OurProduct.css"
import OurProductData from "../../../data/OurProductData.json"
// import { HiBanknotes } from "react-icons/hi2";
// import { FaBriefcase } from "react-icons/fa";
// import { IoArchive } from "react-icons/io5";

const OurProduct = () => {
    const [filterOurProduct , setFilterOurProduct] = useState("forIndividuals")

    let ourProducCardtData = JSON.parse(localStorage.getItem("OurProducCardtData"))
    if (ourProducCardtData === null) {
        localStorage.setItem("OurProducCardtData" , JSON.stringify(OurProductData))
        ourProducCardtData = JSON.parse(localStorage.getItem("OurProducCardtData"))
    }
    const ourProducCardtDataForInviduals = ourProducCardtData.ForIndividuals
    const ourProducCardtDataForBusinesses = ourProducCardtData.ForBusinesses

    useEffect(()=> {
        const buttonsProduct = document.querySelectorAll(".O-A-ourProduct .O-A-headerOurProduct .O-A-boxButtonsOurProduct .O-A-styleButtonOurProduct")
        if (filterOurProduct === "forIndividuals") {
            buttonsProduct[0].classList.add("O-A-active")
            buttonsProduct[1].classList.remove("O-A-active")
        }else{
            buttonsProduct[0].classList.remove("O-A-active")
            buttonsProduct[1].classList.add("O-A-active")
        }
    } ,[filterOurProduct])
    // const icons = {
    //     "FaBriefcase" : FaBriefcase,
    //     "IoArchive" : IoArchive,
    //     "HiBanknotes" : HiBanknotes
    // } 
    // const iconss = [FaBriefcase , IoArchive , HiBanknotes]
    return (
        <section className="O-A-ourProduct">
            <div className="O-A-headerOurProduct">
                <TitleDescription 
                    className ="O-A-titleOurProduct"
                    titleParts={[    
                        {
                            text: "Our",
                            className: ""
                        },
                        {
                            text: "Products",
                            className: "DS_ColorLimeGreen"
                        }
                    ]}
                    description= "Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
                />
                <div className="O-A-boxButtonsOurProduct">
                    <Button 
                        className="O-A-styleButtonOurProduct"
                        content = "For Individuals"
                        onClick={() => setFilterOurProduct("forIndividuals")}
                    />
                    <Button 
                        className="O-A-styleButtonOurProduct"
                        content = "For Businesses"
                        onClick={() => setFilterOurProduct("forBusinesses")}
                    />
                </div>
            </div>
            <div className="O-A-boxCardsOurProduct">
                {filterOurProduct==="forIndividuals"? (
                    <>
                        {ourProducCardtDataForInviduals?.map((inviduals , index) =>{
                            return(
                                <React.Fragment key={index}>
                                    <Card
                                        // key={index}
                                        title= {inviduals.title}
                                        // titleIcon = {<div className="O-A-borderImage">{index===0? <icons.FaBriefcase /> : index===1? <icons.IoArchive /> : <icons.HiBanknotes />}</div>}
                                        desc= {inviduals.desc}
                                        icon = {<div className="O-A-borderImage"><img src={inviduals.imgSrc} className="O-A-imageOurProduct"/></div>}
                                        // icon = {<div className="O-A-borderImage">{index===0? <icons.FaBriefcase /> : index===1? <icons.IoArchive /> : <icons.HiBanknotes />}</div>}
                                        classNames={{
                                        card: "O-A-cardStyleOueProduct",
                                        title: "O-A-titleCardOurProduct",
                                        // titleIcon : "O-A-borderIconCardOurProduct O-A-display",
                                        // imgTitleDiv : "O-A-smallScreenStyle",
                                        desc : "O-A-descCardOurProduct",
                                        icon : "O-A-borderIconCardOurProduct"
                                        }}
                                    />
                                    {index===0? <div className="O-A-line"></div>  : index===1? <div className="O-A-line"></div> :"" }
                                </React.Fragment>
                            )
                        })}
                    </>
                    // <>
                    //     <Card
                    //         title= "Checking Accounts"
                    //         desc="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct1.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     /> 
                    //     <div className="O-A-line"></div>
                    //     <Card
                    //         title= "Savings Accounts"
                    //         desc="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct2.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     /> 
                    //     <div className="O-A-line"></div>
                    //     <Card
                    //         title= "Loans and Mortgages"
                    //         desc="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct3.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     />
                    // </>
                )
                :filterOurProduct==="forBusinesses"? (
                    <>
                        {ourProducCardtDataForBusinesses?.map((inviduals , index) =>{
                            return(
                                <React.Fragment key={index}>
                                    <Card
                                        key={index}
                                        title= {inviduals.title}
                                        desc= {inviduals.desc}
                                        icon = {<div className="O-A-borderImage"><img src={inviduals.imgSrc} className="O-A-imageOurProduct"/></div>}
                                        // icon = {<div className="O-A-borderImage">{index===0? <icons.IoArchive /> : index===1? <icons.HiBanknotes /> : <icons.FaBriefcase />}</div>}
                                        classNames={{
                                        card: "O-A-cardStyleOueProduct",
                                        title: "O-A-titleCardOurProduct",
                                        desc : "O-A-descCardOurProduct",
                                        icon : "O-A-borderIconCardOurProduct"
                                        }}
                                    /> 
                                    {index===0? <div className="O-A-line"></div>  : index===1? <div className="O-A-line"></div> :"" }
                                </React.Fragment>
                            )
                        })}
                    </>
                    // <>
                    //     <Card
                    //         title= "Lorem ipsum dolor sit."
                    //         desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, illo ipsa voluptatibus cumque quia maiores perferendis deserunt delectus. Saepe, impedit."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct2.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     /> 
                    //     <div className="O-A-line"></div>
                    //     <Card
                    //         title= "Lorem ipsum dolor sit."
                    //         desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, illo ipsa voluptatibus cumque quia maiores perferendis deserunt delectus. Saepe, impedit."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct3.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     /> 
                    //     <div className="O-A-line"></div>
                    //     <Card
                    //         title= "Lorem ipsum dolor sit."
                    //         desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, illo ipsa voluptatibus cumque quia maiores perferendis deserunt delectus. Saepe, impedit."
                    //         icon = {<div className="O-A-borderImage"><img src="/assets/img/HomePage/IconCardProduct1.webp"  className="O-A-imageOurProduct"/></div>}
                    //         classNames={{
                    //         card: "O-A-cardStyleOueProduct",
                    //         title: "O-A-titleCardOurProduct",
                    //         desc : "O-A-descCardOurProduct",
                    //         icon : "O-A-borderIconCardOurProduct"
                    //         }}
                    //     />
                    // </>
                ):""
                }
            </div>
        </section>
    )
}

export default OurProduct