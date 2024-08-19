import React from 'react'
import LandingEvent from './components/LandingEvent'
import LandingSuccessEvent from './components/LandingSuccessEvent'
import InvolvedEvent from './components/InvolvedEvent'
const landing = () => {
  return (
    <div>
      <h1 className='text-3xl text-[#326C85] font-bold mt-3 ml-5'>Connecting Alumini,Inspiring Success</h1>
      <span className='text-1xl  mt-3 ml-5'>Our mission is to faster a strong network of alumni who are engaged,connected and inspired to make difference</span>
      <h3 className='text-3xl text-[#326C85] font-semibold mt-6 ml-5'>Upcoming Events</h3>
      <LandingEvent/>
      <h3 className='text-3xl text-[#326C85] font-semibold mt-6 ml-5'>Success Stories</h3>
      <LandingSuccessEvent/>
      <h3 className='text-3xl text-[#326C85] font-semibold mt-6 ml-5'>Get Involved</h3>
      <InvolvedEvent/>
      <div className='mt-10 flex'>
         <div>
          <h5 className='text-2xl text-[#326C85] font-semibold ml-5'>AlumiConnect</h5>
          <h6 className='ml-5'>Kulgaon Road,Rooma Kanpur</h6>
          <h6 className='ml-5 underline'>Email:allumniconnect@gmail.com</h6>
          <h6 className='ml-5'>Phone: +91 7510029715</h6>
         </div>
         <div className='flex ml-auto'>
          <a href='#' className='mr-5'>About Us</a>
          <a href='#' className='mr-5'>Privacy Policy </a>
          <a href='#' className='mr-5'>Terms and Service </a>
         </div>
      </div>
    </div>
  )
}

export default landing
