import { MdArrowOutward } from "react-icons/md"

import Button from "../../UI/Button/Button"

import TitleDescription from "../../UI/TitleDescription/TitleDescription"

import Card from "../../UI/Card/Card"

import "./OurFeatures.css"

import featuresCardData from "../../../data/FeaturesCardData.json"

import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "motion/react"


const OurFeatures = () => {

    const [filter , setFilter] = useState("OnlineBanking")

    const [featureData] = useState(()=>{

        let featurescardData = JSON.parse(localStorage.getItem("featuresCardData"))

        if (featurescardData === null) {

            localStorage.setItem("featuresCardData" , JSON.stringify(featuresCardData))

            featurescardData = JSON.parse(localStorage.getItem("featuresCardData"))

        }

        return featurescardData

    })

    useEffect(()=> {

        const buttons = document.querySelectorAll(".O-A-ourFeatures .O-A-groupFeatures .O-A-box .O-A-styleButton")

        if (filter === "OnlineBanking") {

            buttons[0].style.color= "var(--yb-color-primary)"

            buttons[1].style.color= "var(--yb-color-white)"

            buttons[2].style.color= "var(--yb-color-white)"

        }else if(filter === "FinancialTools"){

            buttons[1].style.color= "var(--yb-color-primary)"

            buttons[2].style.color= "var(--yb-color-white)"

            buttons[0].style.color= "var(--yb-color-white)"

        }else{

            buttons[2].style.color= "var(--yb-color-primary)"

            buttons[0].style.color= "var(--yb-color-white)"

            buttons[1].style.color= "var(--yb-color-white)"

        }

    } ,[filter])

    return (

        <section className="O-A-ourFeatures">


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
                    duration: 1.6,
                    ease: "easeOut"
                }}
            >

                <TitleDescription 

                    className ="O-A-titleOurFeatures" 

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

            </motion.div>


            <div className="O-A-groupFeatures">


                <motion.div
                    className="O-A-box"

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

                    <Button 

                        className="O-A-styleButton"

                        content = "Online Banking"

                        onClick={() => setFilter("OnlineBanking")}

                    />

                    <Button 

                        className="O-A-styleButton"

                        content = "Financial Tools"

                        onClick={() => setFilter("FinancialTools")}

                    />

                    <Button 

                        className="O-A-styleButton"

                        content = "Customer Support"

                        onClick={() => setFilter("CustomerSupport")}

                    />

                </motion.div>


                <AnimatePresence mode="wait">

                    <motion.div
                        className="O-A-containerCardFeatures"

                        key={filter}

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


                        {filter==="OnlineBanking"? (

                        <>

                            {

                                featureData.OnlineBanking?.map((online , index) => {

                                    return(

                                        <motion.div
                                            key={index}

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

                                                titleIcon= {<MdArrowOutward />}

                                                // imageTitle="/img/Icon.png"

                                                title= {online.title}

                                                desc={online.desc}

                                                classNames={{

                                                imgTitleDiv : "O-A-headerCardFeatures",

                                                card: "O-A-cardFeaturesStyle",

                                                title: "O-A-titleCardFeatures",

                                                desc : "O-A-descriptionCardFeatures"

                                                }}

                                            />

                                        </motion.div>

                                    )

                                })

                            }

                        </>

                        )

                        :filter==="FinancialTools"? (

                            <>

                                {

                                    featureData.FinancialTools?.map((financial , index) => {

                                        return(

                                            <motion.div
                                                key={index}

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

                                                    titleIcon= {<MdArrowOutward />}

                                                    // imageTitle="/img/Icon.png"

                                                    title= {financial.title}

                                                    desc={financial.desc}

                                                    classNames={{

                                                    imgTitleDiv : "O-A-headerCardFeatures",

                                                    card: "O-A-cardFeaturesStyle",

                                                    title: "O-A-titleCardFeatures",

                                                    desc : "O-A-descriptionCardFeatures"

                                                    }}

                                                />

                                            </motion.div>

                                        )

                                    })

                                }

                            </>

                        )

                        :filter==="CustomerSupport"? (

                            <>

                                {

                                    featureData.CustomerSupport?.map((customer , index) => {

                                        return(

                                            <motion.div
                                                key={index}

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

                                                    titleIcon= {<MdArrowOutward />}

                                                    // imageTitle="/img/Icon.png"

                                                    title= {customer.title}

                                                    desc={customer.desc}

                                                    classNames={{

                                                    imgTitleDiv : "O-A-headerCardFeatures",

                                                    card: "O-A-cardFeaturesStyle",

                                                    title: "O-A-titleCardFeatures",

                                                    desc : "O-A-descriptionCardFeatures"

                                                    }}

                                                />

                                            </motion.div>

                                        )

                                    })

                                }

                            </>

                        ):""

                        }


                    </motion.div>

                </AnimatePresence>


            </div>

        </section>

    )

}

export default OurFeatures