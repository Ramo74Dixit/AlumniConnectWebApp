import React from 'react'
import Donation from './components/donate/donation'
const Donate = () => {
  return (
    <div className='mt-5'>
      <h4 className='font-bold ml-6 text-3xl'> Support Your Alma Mater</h4>
      <div className='ml-6 mt-5 mr-24 text-[#8c8c8c]'>
      <span >Your contributions help us achieve our goals and foster the next generation of leaders. Learn about our fundraising goals, different donation methods, and the impact of your support.</span>
      </div>
      <Donation />
      <div className='w-[1310px] h-[364px] shadow-slate-300 shadow-lg border ml-5 mt-8 '>
        <p className='ml-5 mt-7 font-bold text-xl'>Make a Donation</p>
        <form className='ml-5'>
          <p className='mt-5'>Donation Amount</p>
          <input className='w-[1250px] h-[38px] border border-[#8c8c8c] p-5 mt-4' type="number" placeholder='Enter Your Amount'></input><br></br>
          <div className='flex mt-5'>
          <div>
          <label>Payment Method</label> <br></br>
          <input type="text" placeholder="e.g. Credit Card" className='w-[620px] h-[40px] border border-[#8c8c8c] p-5 mt-4'></input>
          </div>
          <div className='ml-2'>
          <label>Card Details</label><br></br>
          <input type="text" placeholder="e.g. Name of Bank" className='w-[620px] h-[40px] border border-[#8c8c8c] p-5 mt-4'></input>
          </div>
          </div>
          <button className='w-[1250px] h-[46px] bg-[#326c85] text-white mt-7'>Donate Now</button>
        </form>
      </div>
      <div className='bg-[#F1F1F1] h-20 mt-7 flex'>
        <div>
          <p className='font-bold ml-5 mt-1'>Contact Us</p>
          <p className='ml-5'>123 University Avenue, City, Country</p>
          <p className='ml-5'>Email: contact@alumniconnect.edu</p>
        </div>
        <div className='ml-auto mt-7'>
            <a className='mr-4' href="#">Privacy Policy</a>
            <a className='mr-4' href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  )
}

export default Donate
