
/*import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import './InnerHero.css'
function InnerHero({paragraph , img}) {
return (
    <div className="inner-hero">
    <div className="MGinner-title">
        <p>{paragraph}</p>
        <TitleDescription
            className="MGts-style"
            titleParts={[    
        {
            text: "Welcome to  Careers!",
            className: ""
        },
        {
            text: "YourBank",
            className: "DS_ColorLimeGreen"
        }
    ]}
        description="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
    /> 
    </div>

    <div className="MGinner-img">
        <img src="/assets/img/bgImage/bgImage.webp" alt="bgImage"  className="MGbg-image"/>
        <img src={img} alt="" className="MGimginner-hero"/>

    </div>


    </div>
)
}

export default InnerHero*/ 


import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import './InnerHero.css'

function InnerHero({ img , titlePart1, titlePart2, titlePart3, description }) {
  return (
    <div className="inner-hero">


      <div className="MGinner-img">

        <img
          src={img }
          alt="Careers"
          className="MGimginner-hero"
        />

        <img
          src="/assets/img/bgImage/bgImage.webp"
          alt=""
          className="MGbg-image"
        />


        <TitleDescription
          className="MGts-style"
          titleParts={[
            {
              text: titlePart1 ,
              className: ""
            },
            {
              text: titlePart2,
              className: "DS_ColorLimeGreen"
            },
            {
              text: titlePart3,
              className: ""
            }
          ]}
          description={description}
        />

  

      </div>

    </div>
  )
}

export default InnerHero
