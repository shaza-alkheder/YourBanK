

import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import './InnerHero.css'

function InnerHero({ Welcome ,img , titlePart1, titlePart2, titlePart3, description }) {
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
          Welcome={Welcome}
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
