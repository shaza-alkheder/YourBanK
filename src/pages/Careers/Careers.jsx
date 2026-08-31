import Benefits from "../../components/Sections/Benefits/Benefits"
import CTA from "../../components/Sections/CTA/CTA"
import FAQ from "../../components/Sections/FAQ/FAQ"
import JobOpenings from "../../components/Sections/JobOpenings/JobOpenings"
import Container from "../../components/UI/Container/Container"


function Careers() {
  return (
    <>
    <main>
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
