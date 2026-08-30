import Benefits from "../../components/Sections/Benefits/Benefits"
import CTA from "../../components/Sections/CTA/CTA"
import FAQ from "../../components/Sections/FAQ/FAQ"
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
         <Container>
          <CTA /> 
        </Container>
   </main>
   
   </>
  )
}

export default Careers
