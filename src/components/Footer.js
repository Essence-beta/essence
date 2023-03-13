import React from 'react'
import essenceLogo3 from "../images/essenceLogo3.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left">
        <img src={essenceLogo3} alt="logo" className="w-24 mb-7 mb:mb-0" />
        <div className='mb-8'>
          <p className="text-white text-sm md:text-xl mb-4">BSC scan</p>
          <p className="text-white text-sm md:text-xl mb-4">Poocoin Chart</p>
          <p className="text-white text-sm md:text-xl mb-4">DexTool</p>
        </div>
        <div className='mb-8'>
          <p className="text-white text-sm md:text-xl mb-4">Contract</p>
          <p className="text-white text-sm md:text-xl mb-4">Buy Now</p>
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
