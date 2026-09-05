import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import './Hero.css'

function Hero({iconHero , arrowsHero, imageHero}) {
  const navigate = useNavigate()
  return (
  <div className ="MGhome-hero">
    <div className="MGhero-left">
      <div className="MGtitle1">
        <img src={iconHero} alt="iconHero" />
        <p>No LLC Required, No Credit Check.</p>
      </div>

      <TitleDescription
      className="DS_style"
      titleParts={[    
        {
            text: "Welcome to YourBank Empowering Your",
            className: ""
        },
        {
            text: "Financial Journey",
            className: "DS_ColorLimeGreen"
        }
    ]}
      description="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and 
      businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our 
      customers' needs."
      
      />

      <Button
      className= "MG-button"
      content= "Open Account"
      onClick={()=>navigate("/signup")}
      

      />

    </div> 

    <div className= "MGhero-right">
      <img src= {arrowsHero} alt="arrow-hero" className="MGarrow-hero" />
      <img src={imageHero} alt="image-hero" className="MGhero-dashboard" />
    </div>


        

  </div>
  )
}

export default Hero
