import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import TitleDescription from "../../UI/TitleDescription/TitleDescription";
import "./Hero.css";

function Hero({ iconHero }) {
  const navigate = useNavigate();
  return (
    <div className="MGhome-hero">
      <div className="MGhero-left">
        <div className="MGtitle1">
          <img src={iconHero} alt="iconHero" />
          <p>No LLC Required, No Credit Check.</p>
        </div>

        <TitleDescription
          className="DS_style"
          titleParts={[
            {
              text: "Welcome to YourBank Empowering Your",
              className: "",
            },
            {
              text: "Financial Journey",
              className: "DS_ColorLimeGreen",
            },
          ]}
          description="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and 
      businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our 
      customers' needs."
        />

        <Button
          className="MG-button"
          content="Open Account"
          onClick={() => navigate("/signup")}
        />
      </div>

      <div className="MGhero-right">
        <div className="S-K-Transactions">
          <div className="S-K-TransactionsCards">
            <h2>Your Transactions</h2>
            <div className="S-K-TransCard">
              <div className="S-K-TransCardSec">
                <div className="S-K-TransCardLeft">
                  <div className="S-K-TransCardLeftIcon">
                    <img src="/assets/img/HomePage/VectorStroke.webp" alt="" />
                  </div>
                  <div className="S-K-ContentLeft">
                    <p>Transaction</p>
                    <h2>Joel Kenley</h2>
                  </div>
                </div>
                <p>-$68.00</p>
              </div>
            </div>
            <div className="S-K-TransCard">
              <div className="S-K-TransCardSec">
                <div className="S-K-TransCardLeft">
                  <div className="S-K-TransCardLeftIcon">
                    <img src="/assets/img/HomePage/VectorStroke.webp" alt="" />
                  </div>
                  <div className="S-K-S-K-ContentLeft">
                    <p>Transaction</p>
                    <h2>Mark Smith</h2>
                  </div>
                </div>
                <p>-$68.00</p>
              </div>
            </div>
            <div className="S-K-TransCard">
              <div className="S-K-TransCardSec">
                <div className="S-K-TransCardLeft">
                  <div className="S-K-TransCardLeftIcon">
                    <img src="/assets/img/HomePage/VectorStroke.webp" alt="" />
                  </div>
                  <div className="S-K-ContentLeft">
                    <p>Transaction</p>
                    <h2>Lenen Roy</h2>
                  </div>
                </div>
                <p>-$68.00</p>
              </div>
            </div>
          </div>
          <div className="S-K-Exchange">
            <div className="S-K-ExchangeContainer">
              <h1>Money Exchange</h1>
              <div className="S-K-ExchangeCurrency">
                <div className="S-K-ExchangeCurrencyCard">
                  <div className="S-K-CurrencyDivImg">
                    <img src="/assets/img/HomePage/Inr.webp" alt="" />
                    <h2>INR</h2>
                  </div>
                  <p>Indian Rupees</p>
                </div>
                <div className="S-K-ExchangeCurrencyCard">
                  <div className="S-K-CurrencyDivImg">
                    <img src="/assets/img/HomePage/Usd.webp" alt="" />
                    <h2>USD</h2>
                  </div>
                  <p>United States Dollar</p>
                </div>
                <div className="S-K-Price">
                  <h2>5,0000</h2>
                </div>
                <div className="S-K-Price">
                  <h2>12.00</h2>
                </div>
              </div>
            </div>
            <button className="S-K-btn-change">Exchange</button>
          </div>
        </div>
        <div className="S-K-Income">
          <div className="S-K-IncomeDivImg">
            <img src="/assets/img/HomePage/plus.webp" alt="" />
          </div>
          <div className="S-K-IncomeContent">
            <h2>+ $5000,00</h2>
            <p>Monthly Income</p>
          </div>
        </div>
        <div className="S-K-Arrows">
                  <img src="/assets/img/HomePage/Abstract-Design.webp" alt="" />

        </div>

        <div className="S-K-Currency">
          <p>Supported Currency</p>
          <div className="S-K-CurrencyIcons">
            <div className="S-K-CurrIcon">
              <img src="/public/assets/img/HomePage/Shape.webp" alt="" />
            </div>
               <div className="S-K-CurrIcon">
              <img src="/public/assets/img/HomePage/euro-currency-symbol.webp" alt="" />
            </div>
               <div className="S-K-CurrIcon">
              <img src="/public/assets/img/HomePage/Shape2.webp" alt="" />
            </div>
               <div className="S-K-CurrIcon">
              <img src="/public/assets/img/HomePage/Group.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
