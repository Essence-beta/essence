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
                  <li>Coming Soon..</li>
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
                <button className="p-2 bg-purple-600 rounded-lg">
                  BUY NOW
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
