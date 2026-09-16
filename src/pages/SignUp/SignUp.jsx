import { useNavigate } from "react-router-dom"
import LoginSignUpSection from "../../components/Sections/LoginSignUpSection/LoginSignUpSection"
import Testimonials from "../../components/Sections/Testimonials/Testimonials"
import Container from "../../components/UI/Container/Container"
import ContainerLoginAndSignUp from "../../components/UI/ContainerLoginAndSignUp/ContainerLoginAndSignUp"


function SignUp() {
  const navigate = useNavigate()
  const submitSignUp = () => {
    let users = JSON.parse(localStorage.getItem("SignUp")) || []
    const firstName = document.getElementById("firstNameInput").value
    const lasttName = document.getElementById("lastNameInput").value
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
    const newUser = {
      name : firstName + " " + lasttName,
      Email : email,
      pass : password
    }
    if (users.find((user) => user.Email === newUser.Email)) {
        alert("The Email Is Used")
        return
    }
    if (users) {
      users.push(newUser)
      localStorage.setItem("SignUp" , JSON.stringify(users))
    }else {
      localStorage.setItem("SignUp" , JSON.stringify(users))
      users = JSON.parse(localStorage.getItem("SignUp"))
      users.push(newUser)
    }
    localStorage.setItem("register" , "true")
    localStorage.setItem("userLoginNow" , newUser.name)
    localStorage.setItem("userFound" , "true")
    navigate("/")
  }
  return (
    <div>
        <ContainerLoginAndSignUp><LoginSignUpSection  signup = "true" onclick1 = {() => submitSignUp()}/></ContainerLoginAndSignUp>
        <Container  animateOnScroll>
          <Testimonials/>
        </Container>
    </div>
  )
}

export default SignUp
