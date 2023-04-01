import React from 'react';
import essenceLogo from "../images/essenceLogoMain.png";

function MobileNav({CloseNav, mobileNav}) {
    
  return (
    <div className="md:hidden">
      <div className={mobileNav ? "mobileNav" : "mobileNav openNav"}>
        <div className="flex justify-between mb-6">
          <span>
            <img src={essenceLogo} alt="logo" className="w-1/6" />
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-x-lg text-purple-600"
            viewBox="0 0 16 16"
            onClick={CloseNav}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div>
          <div className="nav">
            <div className="nav-wrapper">
              <ul>
                <li className="md:mx-3">
                  TRADE DEX
                  <ul>
                    <li>
                      <a href="https://pancakeswap.finance/swap?inputCurrency=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563&outputCurrency=BNB">
                        Pancakeswap
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="md:mx-3">
                  SOCIALS
                  <ul>
                    <li>
                      <a href="https://mobile.twitter.com/essencee_token">
                        TWITTER
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/Essencetoken">TELEGRAM</a>
                    </li>
                  </ul>
                </li>
                <li className="md:mx-3">WHITEPAPER</li>
                <li>
                  <button className="p-2 bg-purple-500 rounded-lg">
                    BUY NOW
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;