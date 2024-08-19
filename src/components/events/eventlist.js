import React from 'react'

const eventlist = () => {
  return (
    <div className='mt-5 flex'>
      <div className='w-[350px] h-[375px]  shadow-slate-300 shadow-lg border ml-5 bg-[#CEE7F2]'>
        <img src="./E-1.png" alt="image1" className="ml-5" />
        <h4 className="font-semibold text-xl ml-6 mt-3">Annual Networking Night</h4>
        <div className="ml-6">
          {" "}
          <span className="text-sm text-justify">
          Date:October 15,2023<br></br>
            Time:6:00 PM - 9:00 PM<br></br>
            Location: Downtown Conference Center 
          </span>
        </div>
        <div className='ml-6 mt-2 mb-4'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Register</button>
      </div>
      </div>
      <div className='w-[350px] h-[375px]  shadow-slate-300 shadow-lg border ml-12 bg-[#CEE7F2]'>
        <img src="./E-2.png" alt="image2" className="ml-5" />
        <h4 className="font-semibold text-xl ml-6 mt-3">
          Annual Alumni Reunion
        </h4>
        <div className="ml-6">
          <span className="text-sm text-justify">
            Date:November 20,2023<br></br>
            Time:1:00 PM - 5:00 PM<br></br>
            Location: University Park
          </span>
        </div>
        <div className='ml-6 mt-2 mb-4'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Register</button>
      </div>
      </div>
      <div className='w-[350px] h-[375px]  shadow-slate-300 shadow-lg border ml-12 bg-[#CEE7F2]'>
        <img
          src="./E-3.png"
          alt="image3"
          className="ml-5"
        />
        <h4 className="font-semibold text-xl ml-6 mt-3">
          Carrer Development Workshop
        </h4>
        <div className="ml-6">
          <span className="text-sm text-justify">
          Date:December 5,2023<br></br>
            Time:10:00 AM - 3:00 PM<br></br>
            Location: Alumni Hall
          </span>
        </div>
        <div className='ml-6 mt-2 mb-4'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Register</button>
      </div> 
      </div>
    </div>
  )
}

export default eventlist
