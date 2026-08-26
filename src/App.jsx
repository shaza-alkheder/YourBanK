
import './App.css'
import OurFeatures from './components/OurFeatures/OurFeatures';
import Containeer from './components/Container/Container';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <>

      <Containeer>
        <OurFeatures />
      </Containeer>
      

     <Footer
     logo="/assets/img/Logo/logoNavBar.webp"
     />

    </>
  )

}

export default App