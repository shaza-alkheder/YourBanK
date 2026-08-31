import LoginSignUpSection from "../../components/Sections/LoginSignUpSection/LoginSignUpSection"
import Testimonials from "../../components/Sections/Testimonials/Testimonials"
import Container from "../../components/UI/Container/Container"
import ContainerLoginAndSignUp from "../../components/UI/ContainerLoginAndSignUp/ContainerLoginAndSignUp"


function SignUp() {
  return (
    <div>
        <ContainerLoginAndSignUp><LoginSignUpSection  signup = "true"/></ContainerLoginAndSignUp>
         <Container>
          <Testimonials/>
        </Container>
    </div>
  )
}

export default SignUp
