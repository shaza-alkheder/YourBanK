import './Footer.css'

import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';

import { motion } from "motion/react";


function Footer({ logo}) {

  const icons=[
    {
      "url": "https://www.facebook.com/",
      "icon": FaFacebook
    },
    {
      "url": "https://www.x.com/",
      "icon": FaTwitter
    },
    {
      "url": "https://www.linkedin.com/",
      "icon": FaLinkedin
    }
  ]


  return (

    <footer>

      <div className="mmContainer">


        <motion.div
          className="mmTitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
        >

          <img src={logo} alt="" className='mmLogo'/>

          <ul>

            <li>
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "active" : ""}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({isActive}) => isActive ? "active" : ""}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/careers"
                className={({isActive}) => isActive ? "active" : ""}
              >
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/security"
                className={({isActive}) => isActive ? "active" : ""}
              >
                Security
              </NavLink>
            </li>

          </ul>

        </motion.div>


        <motion.div
          className="mmContact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.3,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          <p>
            <FaEnvelope className='mmContactIcon'/>
            <a className='DS_a' href="mailto:hello@skillbirdge.com">
              hello@skillbirdge.com
            </a>
          </p>

          <p>
            <FaPhoneAlt className='mmContactIcon'/>
            <a className='DS_a' href="tel:+91 91813 23 2309">
              +91 91813 23 2309
            </a>
          </p>

          <p>
            <FaLocationDot className='mmContactIcon'/>
            <a className='DS_a' href="">
              Somewhere in the World
            </a>
          </p>

        </motion.div>


        <motion.div
          className="mmRights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.3,
            delay: 0.3,
            ease: "easeOut",
          }}
        >

          <div className="mmRightsContainer">

            <div className="mmIcons">

              {icons.map((Icon, index) => (

                <motion.div
                  className="mmCircle"
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >

                  <a className='DS_aIcon' href={Icon.url}>
                    <Icon.icon className='mmSocialIcon' />
                  </a>

                </motion.div>

              ))}

            </div>


            <p>YourBank All Rights Reserved</p>


            <div className="mmPolicies">

              <p>
                <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </footer>

  )

}

export default Footer