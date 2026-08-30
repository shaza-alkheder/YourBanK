import LoginSignUpSection from "../../components/Sections/LoginSignUpSection/LoginSignUpSection"
import ContainerLoginAndSignUp from "../../components/UI/ContainerLoginAndSignUp/ContainerLoginAndSignUp"
import "./Login.css"
function Login() {
  return (
    <div>
      <ContainerLoginAndSignUp><LoginSignUpSection  login = "true"/></ContainerLoginAndSignUp>
    </div>
  )
}

export default Login
