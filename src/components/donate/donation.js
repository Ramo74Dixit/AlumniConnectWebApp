import React from "react";

const donation = () => {
  return (
    <div className="flex mt-4">
      <div className='w-[421px] h-[328px] shadow-slate-300 shadow-lg border ml-5 '>
        <h4 className="font-semibold ml-6 mt-7 text-2xl">Fundraising Goals</h4>
        <div className="ml-6 mt-5 mr-4">
          <p className="font-normal text-[#8c8c8c]">
            Our current goal is to raise $1 million in support of new
            scholarships, facility upgrades, and research initiatives.
          </p>
          <img src="/dn-1.png"></img>
        </div>
      </div>
      <div className='w-[421px] h-[328px] shadow-slate-300 shadow-lg border ml-5 '>
        <h4 className="font-semibold ml-6 mt-7 text-2xl">Donation Methods</h4>
        <div className="ml-6 mt-5 mr-4">
          <p className="font-normal text-[#8c8c8c]">
          Choose from a variety of donation methods including online payments, bank transfers, and more.
          </p>
          <img src="/dn-2.png" className="mt-4"></img>
        </div>
      </div>
      <div className='w-[421px] h-[328px] shadow-slate-300 shadow-lg border ml-5 '>
        <h4 className="font-semibold ml-6 mt-7 text-2xl">Impact Stories</h4>
        <div className="ml-6 mt-5 mr-4">
          <p className="font-normal text-[#8c8c8c]">
          Read about the lives changed and projects made possible thanks to the generosity of our donors.
          </p>
          <img src="/dn-3.png" className="mt-4"></img>
        </div>
      </div>
    </div>
  );
};

export default donation;
