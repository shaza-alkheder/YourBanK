
import Container from "../../components/UI/Container/Container"

import "./Home.css"
import OurFeatures from "../../components/Sections/OurFeatures/OurFeatures"
import FAQ from "../../components/Sections/FAQ/FAQ"
import CTA from "../../components/Sections/CTA/CTA"
import Testimonials from "../../components/Sections/Testimonials/Testimonials"
import OurProduct from "../../components/Sections/OurProduct/OurProduct"


function Home() {
  return (

    <div>
      <main>
        <Container><OurProduct /></Container>
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
