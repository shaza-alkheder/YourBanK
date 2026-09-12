import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

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
        <div className="mmTitle">
          <img src={logo} alt="" className='mmLogo'/>
            <ul>
                <li><NavLink to = "/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to = "/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to = "/careers" className={({isActive}) => isActive ? "active" : ""}>Careers</NavLink></li>
                <li><NavLink to = "/security" className={({isActive}) => isActive ? "active" : ""}>Security</NavLink></li>
            </ul>
        </div>

        <div className="mmContact">
                <p><FaEnvelope className='mmContactIcon'/><a className='DS_a' href="mailto:hello@skillbirdge.com">hello@skillbirdge.com</a></p>
                <p><FaPhoneAlt className='mmContactIcon'/><a className='DS_a' href="tel:+91 91813 23 2309">+91 91813 23 2309</a></p>
                <p><FaLocationDot className='mmContactIcon'/> <a className='DS_a' href="">Somewhere in the World</a></p>

        </div>

        <div className="mmRights">
          <div className="mmRightsContainer">

            <div className="mmIcons">
              {icons.map((Icon, index) => (
                  <div className="mmCircle" key={index}>
                    <a className='DS_aIcon' href={Icon.url}><Icon.icon className='mmSocialIcon' /></a>
                  </div>
              ))}
                
            </div>

            <p>YourBank All Rights Reserved</p>

            <div className="mmPolicies">
                <p><a href="">Privacy Policy</a> | <a href="">Terms of Service</a></p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
