import React from 'react'
import essenceLogo3 from "../images/essenceLogo3.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left">
        <img src={essenceLogo3} alt="logo" className="w-24 mb-7 mb:mb-0" />
        <div className="mb-8">
          <p className="text-white text-sm md:text-xl mb-4">
            <a href="https://bscscan.com/token/0x61af88810966c8c4e2acbb6ea5628e7beb1a0563?a=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563">
              BSC scan
            </a>
          </p>
          <p className="text-white text-sm md:text-xl mb-4">
            <a href="https://poocoin.app/tokens/0x61af88810966c8c4e2acbb6ea5628e7beb1a0563">
              Poocoin Chart
            </a>
          </p>
          <p className="text-white text-sm md:text-xl mb-4">DexTool</p>
        </div>
        <div className="mb-8">
          <p className="text-white text-sm md:text-xl mb-4">
            <a href="https://bscscan.com/token/0x61af88810966c8c4e2acbb6ea5628e7beb1a0563?a=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563">
              Contract
            </a>
          </p>
          <p className="text-white text-sm md:text-xl mb-4">
            <a href="https://pancakeswap.finance/swap?inputCurrency=0x61aF88810966c8C4E2acBB6Ea5628E7bEB1A0563&outputCurrency=BNB">Buy Now</a>
          </p>
          <p className="text-white text-sm md:text-xl mb-4">How to Buy</p>
        </div>
        <div>
          <p className="text-white text-sm md:text-xl mb-4">Whitepaper</p>
          <p className="text-white text-sm md:text-xl mb-4">Partners</p>
          <p className="text-white text-sm md:text-xl mb-4">Sponsors</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
