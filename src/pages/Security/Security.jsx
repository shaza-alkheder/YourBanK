import InnerHero from "../../components/Layout/InnerHero/InnerHero"
import FAQ from "../../components/Sections/FAQ/FAQ"
import Protect from "../../components/Sections/Protect/Protect"
import Container from "../../components/UI/Container/Container"


function Security() {
  return (
  <div>
    <main>
      <Container>
      <InnerHero
      img = "/assets/img/SecurityPage/securityHeroImage.webp"
      titlePart1 = "Your Security is Our"
      titlePart2 = "Top Priority"
      description = "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
      />
      </Container> 
     <Container>
          <Protect /> 
        </Container>
          <Container>
          <FAQ /> 
        </Container>
    </main>
  </div>
   
  )
}


export default Security
