
import './App.css'
import Footer from './components/Layout/Footer/Footer'
import FAQ from './components/Sections/FAQ/FAQ'
import Container from './components/UI/Container/Container'


function App() {

  return (
    <>
<Container>
  <FAQ/>
</Container>

     <Footer
     logo="/assets/img/Logo/logoNavBar.webp"
     />

    </>
  )

}

export default App