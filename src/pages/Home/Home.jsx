
import Container from "../../components/UI/Container/Container"

import "./Home.css"
import OurFeatures from "../../components/Sections/OurFeatures/OurFeatures"


function Home() {
  return (

    <div>
      <main>
        <Container>
          <OurFeatures /> 
        </Container>
            <Container>
          <OurFeatures /> 
        </Container>
      </main>
    </div>
  )
}

export default Home
