import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer({ logo}) {

    const icons= [
      FaFacebook, FaTwitter, FaLinkedin 
    ]
  return (
    <footer>
      <div className="mmContainer">
        <div className="mmTitle">
           <img src={logo} alt="" className='mmLogo'/>
            <ul>
                <li>Home</li>
                <li>Careers</li>
                <li>About</li>
                <li>Security</li>
            </ul>
        </div>

        <div className="mmContact">
                <p><FaEnvelope className='mmContactIcon'/>hello@skillbirdge.com</p>
                <p><FaPhoneAlt className='mmContactIcon'/>+91 91813 23 2309</p>
                <p><FaLocationDot className='mmContactIcon'/>Somewhere in the World</p>

        </div>

        <div className="mmRights">
          <div className="mmRightsContainer">

            <div className="mmIcons">
              {icons.map((Icon, index) => (
                  <div className="mmCircle" key={index}>
                    <Icon className='mmSocialIcon' />
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
