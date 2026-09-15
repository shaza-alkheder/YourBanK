import TitleDescription from '../../UI/TitleDescription/TitleDescription'

import './MissionVision.css'

import { useState } from "react";

import MissionVisionData from "../../../data/MissionVisionData.json";

import { motion } from "motion/react";


function MissionVision() {

  const [missionVision] = useState(() => {

    let data = localStorage.getItem("MissionVisionData");

    if (!data) {

      localStorage.setItem(
        "MissionVisionData",
        JSON.stringify(MissionVisionData)
      );

      return MissionVisionData;

    }

    return JSON.parse(data);

  });


  return (

    <div className="MM-MissionVision">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
      >

        <TitleDescription
          className="DS_TitleDescPress"
          titleParts={[
            {
              text: "Mission & Vision",
              className: "DS_ColorLimeGreen"
            }
          ]}
          description="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
        />

      </motion.div>


      <div className="MM-MissionVisionContent">

        {missionVision.map((item, index) => (

          <motion.div
            className="MM-MissionVisionItem"
            key={item.id}

            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true,
              amount: 0.2
            }}

            transition={{
              duration: 1.2,
              ease: "easeOut"
            }}
          >

            <div className="MM-MissionVisionImage">

              <img
                src={item.img}
                className="MM-MissionAbs"
                alt=""
              />

              <img
                src={item.image}
                className="MM-MissionImg"
                alt={item.title}
              />

            </div>


            <div className="MM-MissionVisionText">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}

export default MissionVision;