import LoginSignUpSection from "../../components/Sections/LoginSignUpSection/LoginSignUpSection"
import ContainerLoginAndSignUp from "../../components/UI/ContainerLoginAndSignUp/ContainerLoginAndSignUp"


function SignUp() {
  return (
    <div>
        <ContainerLoginAndSignUp><LoginSignUpSection  signup = "true"/></ContainerLoginAndSignUp>
    </div>
  )
}

export default SignUp
