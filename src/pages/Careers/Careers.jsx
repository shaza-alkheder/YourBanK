import InnerHero from "../../components/Layout/InnerHero/InnerHero"
import Benefits from "../../components/Sections/Benefits/Benefits"
import OurValues from "../../components/Sections/OurValues/OurValues"
import FAQ from "../../components/Sections/FAQ/FAQ"
import JobOpenings from "../../components/Sections/JobOpenings/JobOpenings"
import Container from "../../components/UI/Container/Container"


function Careers() {
  return (

  <>
    <header>
    <Container>
      <InnerHero
      img = "/assets/img/CareersPage/careersHeroImage.webp"
      titlePart1 = "Welcome to"
      titlePart2 = "YourBank"
      titlePart3 = "Careers"
      description = "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
      />
    </Container>
    </header>

    <main>
    <Container> 
      <OurValues/>
    </Container>

      <Container>
          <Benefits /> 
        </Container>

          <Container>
            <JobOpenings />
          </Container>

            <Container>
            <FAQ /> 
          </Container>


    </main>
  
    </>
  )
}

export default Careers
