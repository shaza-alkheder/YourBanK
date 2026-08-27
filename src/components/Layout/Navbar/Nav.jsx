import { NavLink, useNavigate } from "react-router-dom"
import Button from "../../UI/Button/Button"
import './Nav.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react"


function Nav({logo}) {
  const [show , setShow] = useState(false)
  const navigate = useNavigate()
  return (
    <>
    <nav className="MGnav">
      <img src={logo} alt="nav-logo" className="MGnav-logo"></img>
      <div className="MGnavbar-links">
        <ul>
          <li><NavLink to = "/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to = "/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to = "/careers" className={({isActive}) => isActive ? "active" : ""}>Careers</NavLink></li>
          <li><NavLink to = "/security" className={({isActive}) => isActive ? "active" : ""}>Security</NavLink></li>
        </ul>
      </div>

      <div className = "MGnavbar-buttons">
        <Button
        className = "MGsignup-btn"
        content = "Sign Up "
        onClick = {()=>navigate("/signup")}
        />

        <Button
        className="MGlogin-btn"
        content = "Login" 
        onClick={()=>navigate("/login")}/>
      </div>
      <div className="menu-icon">
      <HiMenuAlt3 
      onClick={()=>{setShow(!show)}}
      />
       </div>
    
    </nav>
    <div className={`navMenu ${show ? "show" : ""}`}>
      <ul>
          <li><NavLink to = "/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to = "/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to = "/careers" className={({isActive}) => isActive ? "active" : ""}>Careers</NavLink></li>
          <li><NavLink to = "/security" className={({isActive}) => isActive ? "active" : ""}>Security</NavLink></li>
        </ul>
      
    </div>


    </>
    


  )
}

export default Nav
