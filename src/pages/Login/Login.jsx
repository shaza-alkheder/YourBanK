import { useNavigate } from "react-router-dom"
import LoginSignUpSection from "../../components/Sections/LoginSignUpSection/LoginSignUpSection"
import Testimonials from "../../components/Sections/Testimonials/Testimonials"
import Container from "../../components/UI/Container/Container"
import ContainerLoginAndSignUp from "../../components/UI/ContainerLoginAndSignUp/ContainerLoginAndSignUp"
import "./Login.css"
function Login() {
  const navigate = useNavigate()
  const submitLogin = () => {
    // event.preventDefault()
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value

    let users = JSON.parse(localStorage.getItem("SignUp"))
    if (!users) {
        alert("you not registed")
        return
    }
    localStorage.setItem("userFound" , "false")
    users.forEach(user => {
        if (user.Email === email && user.pass === password) {
            localStorage.setItem("register" , "true")
            const userName = user.name
            localStorage.setItem("userLoginNow" , "@"+userName)
            localStorage.setItem("userFound" , "true")
            // window.location.href="/"
            navigate("/")
        }
    });
    let found = localStorage.getItem("userFound")
    if (found === "false") {
        alert("user not found")
        return
    }
  }
  return (
    <div>
      <ContainerLoginAndSignUp><LoginSignUpSection  login = "true" onclick1 = {() => submitLogin()} /></ContainerLoginAndSignUp>
        <Container>
          <Testimonials/>
        </Container>
    </div>
  )
}

export default Login
