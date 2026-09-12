import Button from '../../UI/Button/Button'
import './CTA.css'
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='S-K-CTA'>
        <img src='/assets/img/HomePage/AbstractDesign.webp' alt='' className='imgdesign'/>
  <div className='S-K-contentCTA'>
    <h2>Start your financial journey with <span>YourBank today!</span></h2>
    <p>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
  </div>
       <Button
        className="S-K-styleButton"
        content="Open Account"
        onClick={() => navigate("/signup")}
      />
      </section>
    </>
  )
}

export default CTA
