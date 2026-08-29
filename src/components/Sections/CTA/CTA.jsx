import Button from '../../UI/Button/Button'
import './CTA.css'

const CTA = () => {
  return (
    <>
      <section className='S-K-CTA'>
  <div className='S-K-contentCTA'>
    <h2>Start your financial journey with <span>YourBank today!</span></h2>
    <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
  </div>
      <Button 
                        className="S-K-styleButton"
                        content = "Open Account"
                        // onClick={}
                    />
      </section>
    </>
  )
}

export default CTA
