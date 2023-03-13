import React from 'react';
import {Data} from "./FeatureData";


function FeatureDesk() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 grid-flow-col gap-8">
        {Data.map((item) => {
          const {id, header, info, icon} = item;
          return (
            <div key={id} className="bg-slate-400 rounded-xl p-5">
              <div className="flex items-center mb-5">
                <img src={icon} alt="community logo" className="w-12 font-bold" loading='eager' />
                <h3 className="font-bold text-2xl ml-4">{header}</h3>
              </div>
              <p>{info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureDesk
