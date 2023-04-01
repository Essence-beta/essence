import React from 'react'
import Logo from "../images/essenceLogoWhite.png";

function Nav() {
  return (
    <div className="hidden md:block fixed w-full">
      <div className="flex justify-between items-center p-2 px-8 bg-black text-white">
        <div>
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="nav">
          <div className="nav-wrapper">
            <ul>
              <li className="mx-3">
                TRADE DEX
                <ul>
                  <li>
                    <a href="https://pancakeswap.finance/swap?inputCurrency=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563&outputCurrency=BNB">
                      Pancakeswap
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mx-3">
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
              <li>
                <button className="p-2 bg-purple-600 rounded-lg text-white">
                  <a href="https://pancakeswap.finance/swap?inputCurrency=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563&outputCurrency=BNB">BUY NOW</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
