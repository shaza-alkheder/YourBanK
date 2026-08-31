import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import Card from "../../UI/Card/Card"
import './UseCases.css'
import Button from '../../UI/Button/Button'

const UseCases = () => {
    return (
        <div className='DS_UseCases'>
            <TitleDescription 
                className="DS_TitleDescUseCases"
                titleParts={[    
                    {
                        text: "Use Cases",
                        className: "DS_ColorLimeGreen"
                    }
                ]}
                description="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
            /> 
            <div className="DS_ContainerUseCase1">
                <div className="DS_ContainerCard">
                        <Card
                            title= "Managing Personal Finances"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase1.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Saving for the Future"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase2.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Homeownership"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase3.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Education Funding"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase4.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                </div>
                <div className='DS_TextContent'>
                    <h2 className='DS_TitleTextContent'>For Individuals</h2>
                    <p className='DS_DescTextContent'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    
                    <div className='DS_Statistics'>
                        <div className='DS_Statistic'>
                            <h3 className='DS_NumStatistic'>78%</h3>
                            <p className='DS_DescStatistic'>Secure Retirement Planning</p>
                        </div>
                        <div className=' DS_BorderDashed'>
                            <h3 className='DS_NumStatistic'>63%</h3>
                            <p className='DS_DescStatistic'>Manageable Debt Consolidation</p>
                        </div>
                        <div className='DS_Statistic'>
                            <h3 className='DS_NumStatistic'>91%</h3>
                            <p className='DS_DescStatistic'>Reducing financial burdens</p>
                        </div>
                        
                    </div>
                        <Button 
                            className="DS_BtnUseCase"
                            content ="Learn More"
                            /> 
                </div>

            </div>
            <div className="DS_ContainerUseCase2">
                <div className="DS_ContainerCard DS_Container2Card">
                        <Card
                            title= "Startups and Entrepreneurs"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase5.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Cash Flow Management"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardProduct3.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Business Expansion"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase7.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                        <Card
                            title= "Payment Solutions"
                            icon = {<div className="DS_BorderImage">
                                <img src="/assets/img/HomePage/IconCardUseCase8.webp"  className="DS_ImageUseCase"/></div>}
                            classNames={{
                            card: "DS_CardStyleUseCase",
                            title: "DS_TitleCardUseCase",
                            icon : "DS_BorderIconCardUseCase"
                            }}
                        /> 
                </div>
                                <div className='DS_TextContent'>
                    <h2 className='DS_TitleTextContent'>For Business</h2>
                    <p className='DS_DescTextContent'> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                    <div className='DS_Statistics'>
                        <div className='DS_Statistic'>
                            <h3 className='DS_NumStatistic'>65%</h3>
                            <p className='DS_DescStatistic'>Cash Flow Management</p>
                        </div>
                        <div className='DS_BorderDashed'>
                            <h3 className='DS_NumStatistic'>70%</h3>
                            <p className='DS_DescStatistic'>Drive Business Expansion</p>
                        </div>
                        <div className='DS_Statistic'>
                            <h3 className='DS_NumStatistic'>45%</h3>
                            <p className='DS_DescStatistic'>Streamline payroll processing</p>
                        </div>
                    </div>
                        <Button 
                            className="DS_BtnUseCase"
                            content ="Learn More"
                            /> 
                        

                </div>
            </div>

        </div>

    )
    }

export default UseCases
