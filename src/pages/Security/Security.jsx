import FAQ from "../../components/Sections/FAQ/FAQ"
import Protect from "../../components/Sections/Protect/Protect"
import Container from "../../components/UI/Container/Container"


function Security() {
  return (
  <div>
    <main>
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
