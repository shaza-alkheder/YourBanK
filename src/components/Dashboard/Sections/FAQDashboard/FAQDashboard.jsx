import { useState } from 'react';
import './FAQDashboard.css'
import FaqCardData from "../../../data/FaqCardData.json";


const FAQDashboard = () => {
     const [faqs, setFaqs] = useState(() => {
    const storedFaqs = localStorage.getItem("faqs");
   if (storedFaqs) {
      return JSON.parse(storedFaqs);
    }

    localStorage.setItem("faqs", JSON.stringify(FaqCardData));

    return FaqCardData;
  });
  return (
    <>
      
    </>
  )
}

export default FAQDashboard
