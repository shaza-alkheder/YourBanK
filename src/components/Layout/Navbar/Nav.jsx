import { NavLink, useNavigate } from "react-router-dom"
import Button from "../../UI/Button/Button"
import './Nav.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react"
import { FaUser } from "react-icons/fa";


function Nav({logo}) {
  const [show , setShow] = useState(false)
  const navigate = useNavigate()
  const [userFound , SetuserFound] = useState(localStorage.getItem("userFound") || "false")
  const closeMenu = () => {
  setShow(false)
}
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
          <li><NavLink to = "/dashboard" className={({isActive}) => isActive ? "active" : ""}>Dash</NavLink></li>
        </ul>
      </div>
      {userFound==="true"? (
        <>
          <div style={{display : "none"}} className = "MGnavbar-buttons">
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
      
          <div  className = "MGnavbar-buttons O-A-alignCenter">
            <p><FaUser /> {localStorage.getItem("userLoginNow")}</p>
            <Button
              className="MGlogin-btn O-A-logout"
              content = "LogOut" 
              onClick={()=>{SetuserFound("false")
                localStorage.setItem("userFound" , "false")
                localStorage.setItem("userLoginNow" , "")
              }}
            />
        </div>
      </>
      ):
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
      }
      
      <div className="menu-icon">
      <HiMenuAlt3 
      onClick={()=>{setShow(!show)}}
      />
      </div>
    
    </nav>
    <div className={`navMenu ${show ? "show" : ""}`}>
      <ul>
          <li><NavLink to = "/"  onClick={closeMenu} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to = "/about"  onClick={closeMenu} className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to = "/careers"  onClick={closeMenu} className={({isActive}) => isActive ? "active" : ""}>Careers</NavLink></li>
          <li><NavLink to = "/security"  onClick={closeMenu} className={({isActive}) => isActive ? "active" : ""}>Security</NavLink></li>
          <li><NavLink to = "/dashboard"  onClick={closeMenu} className={({isActive}) => isActive ? "active" : ""}>Dash</NavLink></li>
        </ul>
        
      {userFound==="true"? (
        <>
          <div style={{display : "none"}} className = "MGmobile-buttons">
            <Button
            className = "MGsignup-mobile"
            content = "Sign Up "
            onClick = {()=>navigate("/signup")}
            />

            <Button
            className="MGlogin-mobile"
            content = "Login" 
            onClick={()=>navigate("/login")}/>
          </div>
          <div className = "MGmobile-buttons O-A-boxLogOut">
          <p><FaUser /> {localStorage.getItem("userLoginNow")}</p>

          <Button
            className="MGlogin-mobile O-A-menuLogOut"
            content = "LogOut" 
            onClick={()=>{SetuserFound("false")
              localStorage.setItem("userFound" , "false")
              localStorage.setItem("userLoginNow" , "")
            }}
          />
        </div>
        </>
      ):
      <div className = "MGmobile-buttons">
        <Button
        className = "MGsignup-mobile"
        content = "Sign Up "
        onClick = {()=>navigate("/signup")}
        />

        <Button
        className="MGlogin-mobile"
        content = "Login" 
        onClick={()=>navigate("/login")}/>
      </div>
      }  
      
    </div>


    </>
    


  )
}

export default Nav
