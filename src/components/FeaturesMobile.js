import React, { useState } from 'react'
import { Data } from './FeatureData';
import essenceLogoMain from "../images/essenceLogoMain.png";

function FeaturesMobile() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();

  const showModal = (id) => {
    setModal(true);
    Data.filter((item) => {
      return item.id === id? setData(item): "Sorry no information available";
    })
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div>
      <div className="flex flex-col">
        {Data.map((item) => {
          const { id, header, info, icon } = item;
          return (
            <div key={id} className="bg-slate-400 rounded-xl p-5 m-4">
              <div className="flex items-center mb-5">
                <img src={icon} alt="community logo" className="font-bold w-9" loading='eager'/>
                <h3 className="font-bold text-2xl ml-4">{header}</h3>
              </div>
              <div>
                <p>{`${info.substring(0, 50)}...`}</p>
                <button
                  className="text-xs text-blue-500"
                  onClick={(e) => showModal(id)}
                >
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={modal ? "modal shadow-lg relative" : "hidden"}>
        <img src={essenceLogoMain} alt="logo" className='w-8 mx-auto' />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-circle-fill absolute top-0 right-0 font-bold text-purple-600 m-2"
            viewBox="0 0 16 16"
            onClick={closeModal}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>

          <div className="p-3">
            <h2 className="text-center underline font-bold text-xl mb-2">
              {data?.header}
            </h2>
            <p>{data?.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesMobile
