// import { MdArrowOutward } from "react-icons/md"

import React, { useEffect, useState } from "react"

import Button from "../../UI/Button/Button"

import Card from "../../UI/Card/Card"

import TitleDescription from "../../UI/TitleDescription/TitleDescription"

import "./OurProduct.css"

import OurProductData from "../../../data/OurProductData.json"

import { AnimatePresence, motion } from "motion/react"

// import { HiBanknotes } from "react-icons/hi2";

// import { FaBriefcase } from "react-icons/fa";

// import { IoArchive } from "react-icons/io5";

const OurProduct = () => {

    const [filterOurProduct , setFilterOurProduct] = useState("forIndividuals")

    const [ourProductData] = useState(()=>{

        let ourProducCardtData = JSON.parse(localStorage.getItem("OurProducCardtData"))

        if (ourProducCardtData === null) {

            localStorage.setItem("OurProducCardtData" , JSON.stringify(OurProductData))

            ourProducCardtData = JSON.parse(localStorage.getItem("OurProducCardtData"))

        }

        return ourProducCardtData

    })

    console.log(ourProductData)

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

            <motion.div
                className="O-A-headerOurProduct"

                initial={{
                    opacity: 0,
                    y: 40
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true,
                    amount: 0.15
                }}

                transition={{
                    duration: 1.6,
                    ease: "easeOut"
                }}
            >

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

            </motion.div>


            <AnimatePresence mode="wait">

                <motion.div
                    className="O-A-boxCardsOurProduct"
                    key={filterOurProduct}

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    exit={{
                        opacity: 0,
                        y: 30
                    }}

                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >

                    {filterOurProduct==="forIndividuals"? (

                        <>

                            {ourProductData.ForIndividuals?.map((inviduals , index) =>{

                                return(

                                    <React.Fragment key={index}>

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 40
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                y: 0
                                            }}

                                            viewport={{
                                                once: true,
                                                amount: 0.15
                                            }}

                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.2,
                                                ease: "easeOut"
                                            }}
                                        >

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

                                        </motion.div>

                                        {index % 3 !== 2 && 

                                            (

                                                <div className="O-A-line"></div>

                                            )

                                        }

                                    </React.Fragment>

                                )

                            })}

                        </>

                    )

                    :filterOurProduct==="forBusinesses"? (

                        <>

                            {ourProductData.ForBusinesses?.map((inviduals , index) =>{

                                return(

                                    <React.Fragment key={index}>

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 40
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                y: 0
                                            }}

                                            viewport={{
                                                once: true,
                                                amount: 0.15
                                            }}

                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.2,
                                                ease: "easeOut"
                                            }}
                                        >

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

                                        </motion.div>

                                        {index % 3 !== 2 && 

                                            (

                                                <div className="O-A-line"></div>

                                            )

                                        }

                                    </React.Fragment>

                                )

                            })}

                        </>

                    ):""

                    }

                </motion.div>

            </AnimatePresence>

        </section>

    )

}

export default OurProduct