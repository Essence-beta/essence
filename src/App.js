import React, { useState } from "react";
import Nav from "./components/Nav";
import essenceLogoMain from "./images/essenceLogoMain.png";
import FeatureDesk from "./components/FeatureDesk";
import FeaturesMobile from "./components/FeaturesMobile";
import Metamask from "./images/metamask.png";
import BNB from "./images/bnb.png";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./App.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  const OpenNav = () => {
    setMobileNav(true);
  };

  const CloseNav = () => {
    setMobileNav(false);
  };

  const data = {
    labels: [
      "Airdrop - 1%",
      "Ecosystem - 2%",
      "Community Management - 2%",
      "Team - 2%",
      "Development - 3%",
      "liquidity Pool - 10%",
      "Burn - 80%"
    ],
    datasets: [
      {
        data: [1, 2, 2, 2, 3, 10, 80],
        backgroundColor: [
          "aqua",
          "orangered",
          "purple",
          "blue",
          "green",
          "yellow",
          "pink",
        ],
      },
      {
        data: [1, 2, 2, 2, 3, 10, 80],
        backgroundColor: [
          "aqua",
          "orangered",
          "purple",
          "blue",
          "green",
          "yellow",
          "pink",
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <MobileNav CloseNav={CloseNav} mobileNav={mobileNav} />
      <div className="sticky bg-white w-full flex items-center justify-between md:hidden">
        <img
          src={essenceLogoMain}
          alt="logo"
          className="w-9 m-4"
          loading="eager"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          fill="currentColor"
          className="bi bi-list text-purple-600"
          viewBox="0 0 16 16"
          onClick={OpenNav}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="hero-section flex flex-col md:flex-row items-center w-full md:py-32">
        <div className="md:w-1/2 text-white md:p-30 p-7 md:p-10 pt-10 md:pt-0">
          <div>
            <h1 className="font-bold text-4xl md:text-6xl headDecor" id="words">
              ESSENCE TOKEN
            </h1>
          </div>
          <h2 className="text-xl md:mr-52 mt-8">
            Essence token is a cryptocurrency that aims to provide a means for
            human settlement and exchange within cryptocurrency sector.
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-5 md:p-0">
          <img
            src={essenceLogoMain}
            alt="heroimg"
            loading="eager"
          />
        </div>
      </div>
      <div className="sectionsBackground p-10 md:p-30 md:pb-32">
        <h1 className="text-center text-white md:text-left font-bold headDecor text-5xl mb-6">
          Features
        </h1>
        <div className="hidden md:block">
          <FeatureDesk />
        </div>
        <div className="md:hidden block">
          <FeaturesMobile />
        </div>
      </div>
      <div className="hero-section p-10 md:p-30 md:pb-32">
        <div>
          <h1 className="text-center md:text-left text-white font-bold headDecor text-5xl">
            How To Buy
          </h1>
          <div className="grid grid-col-1 grid-row-3 md:grid-cols-3 md:grid-rows-1 gap-3 md:gap-5 mt-8">
            <div className="text-center">
              <div className="flex flex-col mb-2">
                <img
                  src={Metamask}
                  alt="metamask"
                  className="w-1/4 mx-auto my-3"
                />
                <h2 className="text-white font-bold text-xl md:text-2xl">
                  Create A Wallet
                </h2>
              </div>
              <p className="text-white text-xs md:text-xl">
                Create a MetaMask, Trustwallet or any decentralized Wallet using either a desktop computer or an
                iOS/Android. This will allow you to buy, sell, send, and receive
                $ESCN
              </p>
            </div>
            <div className="text-center">
              <div className="flex flex-col mb-2">
                <img src={BNB} alt="metamask" className="w-2/12 mx-auto my-3" />
                <h2 className="text-white font-bold text-xl md:text-2xl">
                  Send BNB to your Wallet
                </h2>
              </div>
              <p className="text-white text-xs md:text-xl">
                You can buy BNB directly on MetaMask or transfer it to your
                MetaMask Wallet from exchanges like Binance, Kucoin, etc.
              </p>
            </div>
            <div className="text-center">
              <div className="flex flex-col mb-2">
                <img
                  src={essenceLogoMain}
                  alt="logo"
                  className="how-to-buy-essence-logo mx-auto my-3"
                />
                <h2 className="text-white font-bold text-xl md:text-2xl">
                  Swap BNB For $ESCN
                </h2>
              </div>
              <p className="text-white text-xs md:text-xl">
                When you have BNB available, Press ‘Select a token’ and enter
                the token address "OUR contract address would be here" Click the
                swap button & confirm the transaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionsBackground md:p-10 md:p-30 md:pb-32">
        <h1 className="text-center text-white md:text-left font-bold headDecor text-5xl mb-10">
          Tokonomics
        </h1>
        <div className="flex flex-col md:justify-center md:flex-row w-full">
          <div className="flex flex-col items-center md:w-1/3 md:mr-28">
            <Pie data={data}></Pie>
          </div>
          <div className="mt-10 md:mt-0 text-white">
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">Launch on Pancakeswap</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">Total Supply 1Trillion Tokens</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">Liquidity Pool: 10%</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">24 month vesting period</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">Team and advisor wallets are locked.</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill text-purple-600 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p className="font-bold">Binance Smart Chain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section p-10 md:p-30 md:pb-32">
        <h1 className="text-center md:text-left text-white font-bold headDecor text-5xl mb-10">
          Road Map
        </h1>
        <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-2 grid-flow-col w-full resume">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">PHASE ONE</h3>
            <div className="resume-item">
              <h4>Organic Telegram and Twitter community</h4>
            </div>
            <div className="resume-item">
              <h4>Website Launch</h4>
            </div>
            <div className="resume-item">
              <h4>Essence Token Launch</h4>
            </div>
            <div className="resume-item">
              <h4>Whitepaper Launch</h4>
            </div>
            <div className="resume-item">
              <h4>Global Community Expansion</h4>
            </div>
            <div className="resume-item">
              <h4>Token Contract Audit</h4>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">PHASE TWO</h3>
            <div className="resume-item">
              <h4>Coinmarket and CoinGecko listing</h4>
            </div>
            <div className="resume-item">
              <h4>Creation of DAO Wallet</h4>
            </div>
            <div className="resume-item">
              <h4>Partnership Announcements</h4>
            </div>
            <div className="resume-item">
              <h4>Airdrops and Contests for the community and Token Holders</h4>
            </div>
            <div className="resume-item">
              <h4>Staking and farming of Tokens</h4>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">PHASE THREE</h3>
            <div className="resume-item">
              <h4>Project and White Paper Review</h4>
            </div>
            <div className="resume-item">
              <h4>Market Analysis</h4>
            </div>
            <div className="resume-item">
              <h4>25,000 Telegram Followers</h4>
            </div>
            <div className="resume-item">
              <h4>NFT Creation for innovation and marketing</h4>
            </div>
            <div className="resume-item">
              <h4>Listing on Centralised Exchanges</h4>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">PHASE FOUR</h3>
            <div className="resume-item">
              <h4>NFT Marketplace</h4>
            </div>
            <div className="resume-item">
              <h4>App development for IOS/Andriod</h4>
            </div>
            <div className="resume-item">
              <h4>Future Planning</h4>
            </div>
            <div className="resume-item">
              <h4>Listing on more CEX</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-10 md:p-30">
        <Footer />
      </div>
    </>
  );
}

export default App;
