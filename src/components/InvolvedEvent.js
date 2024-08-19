import React from 'react'

const InvolvedEvent = () => {
  return (
    <div className="mt-4 flex ">
      <div className='w-[400px] h-[150px] shadow border border-black" ml-5 bg-[#CEE7F2]'>
        <h4 className='text-center font-bold mt-5'>Volunteer</h4>
        <p className='ml-5 mt-3'>Join Our team of dedicated voluteers and make a difference in the alumni community</p>
        <div className='justify-center items-center ml-32 mt-2'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Sign Up</button>
      </div> 
      </div>
      <div className='w-[400px] h-[150px] shadow border border-black" ml-12 bg-[#CEE7F2]'>
      <h4 className='text-center font-bold mt-3'>Donate</h4>
      <p className='ml-5 mt-3'>Support our initaives by making a donation to the alumni association</p>
      <div className='justify-center items-center ml-32 mt-2'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Donate Now</button>
      </div> 
      </div>
      <div className='w-[400px] h-[150px] shadow border border-black" ml-12  bg-[#CEE7F2]'>
      <h4 className='text-center font-bold mt-3'>Mentor</h4>
      <p className='ml-5 mt-3'>Share your expertise and guide recent graduates as a mentor.</p>
      <div className='justify-center items-center ml-32 mt-2'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Become a Mentor</button>
      </div> 
      </div>
    </div>
  )
}

export default InvolvedEvent
