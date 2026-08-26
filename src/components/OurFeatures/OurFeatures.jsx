// import { MdArrowOutward } from "react-icons/md"
import Button from "../Button/Button"
import TitleDescription from "../TitleDescription/TitleDescription"
import Card from "../UI/Card/Card"
import "./OurFeatures.css"

const OurFeatures = () => {
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
                    />
                    <Button 
                        className="O-A-styleButton"
                        content = "Financial Tools"
                    />
                    <Button 
                        className="O-A-styleButton"
                        content = "Customer Support"
                    />
                </div>
                <div className="O-A-containerCardFeatures">
                    <Card
                        // icon= {<MdArrowOutward />}
                        imageTitle="/img/Icon.png"
                        title="24/7 Account Access"
                        desc="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
                        classNames={{
                        imgTitleDiv : "O-A-headerCardFeatures",
                        card: "O-A-cardFeaturesStyle",
                        title: "O-A-titleCardFeatures",
                        desc : "O-A-descriptionCardFeatures"
                        }}
                    /> 
                    <Card
                        // icon= {<MdArrowOutward />}
                        imageTitle="/img/Icon.png"
                        title="24/7 Account Access"
                        desc="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
                        classNames={{
                        imgTitleDiv : "O-A-headerCardFeatures",
                        card: "O-A-cardFeaturesStyle",
                        title: "O-A-titleCardFeatures",
                        desc : "O-A-descriptionCardFeatures"
                        }}
                    /> 
                    <Card
                        // icon= {<MdArrowOutward />}
                        imageTitle="/img/Icon.png"
                        title="24/7 Account Access"
                        desc="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
                        classNames={{
                        imgTitleDiv : "O-A-headerCardFeatures",
                        card: "O-A-cardFeaturesStyle",
                        title: "O-A-titleCardFeatures",
                        desc : "O-A-descriptionCardFeatures"
                        }}
                    /> 
                    <Card
                        // icon= {<MdArrowOutward />}
                        imageTitle="/img/Icon.png"
                        title="24/7 Account Access"
                        desc="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
                        classNames={{
                        imgTitleDiv : "O-A-headerCardFeatures",
                        card: "O-A-cardFeaturesStyle",
                        title: "O-A-titleCardFeatures",
                        desc : "O-A-descriptionCardFeatures"
                        }}
                    /> 
                </div>
            </div>
        </section>
    )
}

export default OurFeatures