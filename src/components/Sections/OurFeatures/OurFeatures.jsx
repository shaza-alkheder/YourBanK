import { MdArrowOutward } from "react-icons/md"
import Button from "../../UI/Button/Button"
import TitleDescription from "../../UI/TitleDescription/TitleDescription"
import Card from "../../UI/Card/Card"
import "./OurFeatures.css"
import featuresCardData from "../../../data/FeaturesCardData.json"
import { useEffect, useState } from "react"

const OurFeatures = () => {
    const [filter , setFilter] = useState("OnlineBanking")

    let featurescardData = JSON.parse(localStorage.getItem("featuresCardData"))
    if (featurescardData === null) {
        localStorage.setItem("featuresCardData" , JSON.stringify(featuresCardData))
        featurescardData = JSON.parse(localStorage.getItem("featuresCardData"))
    }
    
    const featurescardDataOnline = featurescardData.OnlineBanking
    const featurescardDataFinancialTools = featurescardData.FinancialTools
    const featurescardDataCustomerSupport = featurescardData.CustomerSupport
    
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
            <TitleDescription 
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
            <div className="O-A-groupFeatures">
                <div className="O-A-box">
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
                </div>
                <div className="O-A-containerCardFeatures">
                    {filter==="OnlineBanking"? (
                    <>
                        {
                            featurescardDataOnline?.map((online , index) => {
                                return(
                                    <Card
                                        key={index}
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
                                )
                            })
                        }
                    </>
                    )
                    :filter==="FinancialTools"? (
                        <>
                            {
                                featurescardDataFinancialTools?.map((financial , index) => {
                                    return(
                                        <Card
                                            key={index}
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
                                    )
                                })
                            }
                        </>
                    ):filter==="CustomerSupport"? (
                        <>
                            {
                                featurescardDataCustomerSupport?.map((customer , index) => {
                                    return(
                                        <Card
                                            key={index}
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
                                    )
                                })
                            }
                        </>
                    ):""
                }
                
                </div>
            </div>
        </section>
    )
}

export default OurFeatures