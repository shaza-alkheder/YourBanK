
import "./Home.css"
import OurFeatures from "../../components/Sections/OurFeatures/OurFeatures"
import Container from "../../components/UI/container/container"
import Hero from "../../components/Layout/Hero/Hero"



function Home() {
  return (
    <div className="home">
      <img src="/assets/img/HomePage/Objects.webp" 
      alt="" 
      className="MGobjects"/>
      <main>
        <Container>
          <Hero iconHero="/assets/img/HomePage/iconHero.png"
                arrowsHero="/assets/img/HomePage/arrowsHero.webp"
                imageHero="/assets/img/HomePage/imageHero.webp"
          
          
          />
          <OurFeatures /> 
        
        </Container>
      </main>
    </div>  

  
  )
}

export default Home
