import Benefits from "../../components/Sections/Benefits/Benefits"
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
          <FAQ /> 
        </Container>
   </main>
   
   </>
  )
}

export default Careers
