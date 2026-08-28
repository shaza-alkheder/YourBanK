
import Container from "../../components/UI/Container/Container"

import "./Home.css"
import OurFeatures from "../../components/Sections/OurFeatures/OurFeatures"
import FAQ from "../../components/Sections/FAQ/FAQ"
import CTA from "../../components/Sections/CTA/CTA"


function Home() {
  return (

    <div>
      <main>
        <Container>
          <OurFeatures /> 
        </Container>
            <Container>
          <FAQ /> 
        </Container>
           <Container>
          <CTA /> 
        </Container>
      </main>
    </div>
  )
}

export default Home
