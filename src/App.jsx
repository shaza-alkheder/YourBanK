

import './App.css'
import Footer from './components/Footer/Footer'
import OurFeatures from './components/OurFeatures/OurFeatures';
import Containeer from './components/Container/Container';

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

export default App;
