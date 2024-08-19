import React from 'react'
import EventList from './components/events/eventlist'
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div>
       <h3 className='font-bold text-3xl ml-5 mt-4'>Upcoming Almuni Events</h3>
       <EventList/>
       <div className='mt-44 flex'>
       <div className='ml-6 mt-2 mb-4'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8"><Link to='/'>Back to HomePage</Link></button>
      </div> 
      <div className='ml-auto mt-2 mb-4 mr-3'>
      <button class="rounded-none bg-[#326C85] text-white text-center w-40 h-8">Donate</button>
      </div> 
       </div>
    </div>
  )
}

export default Events
