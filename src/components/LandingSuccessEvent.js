import React from 'react'

const LandingSuccessEvent = () => {
  return (
<div className="mt-4 flex">
      <div className='w-[44%] h-[300px] shadow border border-black" ml-5'>
        <img src="./pr-1.jpg" alt="image1" className="ml-5" clasName="w-[400px] h-[200px] bg-transparent"/>
        <h4 className="font-semibold text-xl ml-6 mt-3">Jane Smith-Enterprenuer</h4>
        <div className="ml-6">
          {" "}
          <span className="text-sm text-justify">
            Jane Smith,Class of 2010 has built a successful tech startup that is revolutioning the industry.
          </span>
        </div>
      </div>
      <div className='w-[44%] h-[300px] shadow border border-black" ml-12'>
        <img src="./pr-2.jpg" alt="image2" className="ml-5 bg-transparent" width={400} height={200}/>
        <h4 className="font-semibold text-xl ml-6 mt-3">
          John Doe-Philanthropist
        </h4>
        <div className="ml-6">
          <span className="text-sm text-justify">
            John Doe,Class of 2005 has made significant contributions to various charitable organizations.
          </span>
        </div>
      </div>
    </div>
  )
}

export default LandingSuccessEvent
