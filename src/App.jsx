import "./app.css";
// images
import logo from "./assets/images/logo.gif";
import buyBtc from "./assets/images/dollar.png";
import sellBtc from "./assets/images/sell.png";
import arrowDown from "./assets/images/down-chevron.png";
// icons
import {
  ArrowLeft,
  Bell,
  Safari,
  Settings,
  Toggle,
  Wallet,
} from "./assets/icons/designs";
// chart (using recharts)
import Recharts from "./assets/icons/Recharts";

function App() {
  const selected = (selector) => {
    // get class of selected element
    const element = document.querySelector(selector);
    // add personalized styling
    element.classList.toggle("selected");
    setTimeout(() => {
      // revert to default styling after 2s
      element.classList.toggle("selected");
    }, [2000]);
  };

  return (
    <>
      <div className="mobile-app">
        {/* header */}
        <div className="header">
          <div className="left-arrow">
            <ArrowLeft />
          </div>
          <div className="bitcoin-wallet-header">Bitcoin Wallet</div>
          <div className="toggle">
            <Toggle />
          </div>
        </div>
        {/* bitcoin-card-component */}
        <div className="bitcoin-card">
          <div className="about-bitcoin">
            <div className="bitcoin-img">
              <img className="logo" src={logo} alt="logo" />
              <span className="bitcoin-logo-text">Bitcoin</span>
            </div>
            <div className="bitcoin-symbol">BTC</div>
          </div>
          <h4 className="amount">3.529020 BTC</h4>
          <div className="value-container">
            <h4 className="dollar-value">$19,325 USD</h4>
            <button className="btn-percent">-2.23%</button>
          </div>
          <h4 className="arrow-down">
            <img
              className="arrow-down-img"
              src={arrowDown}
              alt="arrow-down-img"
            />
          </h4>
        </div>
        {/* time-span component*/}
        <div className="time">
          <p className="days" onClick={() => selected(".days")}>
            Days
          </p>
          <p className="week" onClick={() => selected(".week")}>
            Week
          </p>
          <p className="month" onClick={() => selected(".month")}>
            Month
          </p>
          <p className="year" onClick={() => selected(".year")}>
            Year
          </p>
        </div>
        {/* chart component */}
        <div className="chart-component">
          <div className="volatility">
            <div className="bearish">
              <div className="red-circle"></div>
              <p>Lower: $4.895</p>
            </div>
            <div className="bullish">
              <div className="green-circle"></div>
              <p>Higher: $6.857</p>
            </div>
          </div>
          <Recharts />
          {/* <img className="chart-img" src={chart} alt="chart-img" /> */}
          <p className="coin-dollar-value">1BTC = $5,483</p>
        </div>
        {/* trade */}
        <div className="trade">
          <div className="buy-btc">
            <img className="buy-btc-img" src={buyBtc} alt="buy-btc-img" />
            <h5>Buy Btc</h5>
          </div>
          <div className="sell-btc">
            <img className="sell-btc-img" src={sellBtc} alt="sell-btc-img" />
            <h5>Sell Btc</h5>
          </div>
        </div>
        {/* footer */}
        <footer>
          <Wallet />
          <Safari />
          <Bell />
          <Settings />
        </footer>
      </div>
    </>
  );
}

export default App;