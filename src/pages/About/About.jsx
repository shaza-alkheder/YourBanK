import InnerHero from "../../components/Layout/InnerHero/InnerHero"
import PressReleases from "../../components/Sections/PressReleases/PressReleases"
import Container from "../../components/UI/Container/Container"


function About() {
  return (
    <div>
    <header>
      <Container>
      <InnerHero
      img = "/assets/img/AboutPge/aboutHeroImage.webp"
      Welcome="Welcome to YourBank"
      titlePart1 = "Where Banking Meets"
      titlePart2 = "Excellence!"
      description = "At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
      />
      </Container> 
      </header>
    
      <main>
      <Container>
        <PressReleases />
      </Container>
      </main>

    </div>
  )
}

export default About
