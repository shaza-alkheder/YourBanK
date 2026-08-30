
import Container from "../../components/UI/Container/Container"
import "./Home.css"
import OurFeatures from "../../components/Sections/OurFeatures/OurFeatures"
import Hero from "../../components/Layout/Hero/Hero"
import FAQ from "../../components/Sections/FAQ/FAQ"
import CTA from "../../components/Sections/CTA/CTA"
import Testimonials from "../../components/Sections/Testimonials/Testimonials"
import OurProduct from "../../components/Sections/OurProduct/OurProduct"


function Home() {
  return (
    <div className="home">
      <img src="/assets/img/HomePage/Objects.webp" 
      alt="" 
      className="MGobjects"/>
    <header>
        <Container> 
          <Hero iconHero="/assets/img/HomePage/iconHero.png"
                arrowsHero="/assets/img/HomePage/arrowsHero.webp"
                imageHero="/assets/img/HomePage/imageHero.webp"
          />
        </Container>
    </header>
      <main>
      

        <Container><OurProduct />
        </Container>
        <Container>
          <OurFeatures /> 
        </Container>
        <Container>
          <FAQ /> 
        </Container>
        <Container>
          <Testimonials/>
        </Container>
          <Container>
          <CTA /> 
        </Container>
      </main>
    </div>
  )
}

export default Home