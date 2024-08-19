import React from "react";

const LandingEvent = () => {
  return (
    <div className="mt-4 flex">
      <div className='w-[375px] h-[250px] shadow border border-black" ml-5'>
        <img src="./AnualAlumnuMeetup.png" alt="image1" className="ml-5" />
        <h4 className="font-semibold text-xl ml-6 mt-3">Anual Alumni Meetup</h4>
        <div className="ml-6">
          {" "}
          <span className="text-sm text-justify">
            Join us for a day of networking and reminscing with fellow alumini
            Date:March 25,2025
          </span>
        </div>
      </div>
      <div className='w-[375px] h-[250px] shadow border border-black" ml-12'>
        <img src="./CommunityServiceDay.png" alt="image2" className="ml-5" />
        <h4 className="font-semibold text-xl ml-6 mt-3">
          Carrer Development Workshop
        </h4>
        <div className="ml-6">
          <span className="text-sm text-justify">
            Enhance your professional skills with our expert-led workshop. Date:
            April 10,2025
          </span>
        </div>
      </div>
      <div className='w-[375px] h-[250px] shadow border border-black" ml-12 '>
        <img
          src="./CarrerDevelopmentWorkshop.png"
          alt="image3"
          className="ml-5"
        />
        <h4 className="font-semibold text-xl ml-6 mt-3">
          Community Service Day
        </h4>
        <div className="ml-6">
          <span className="text-sm text-justify">
            Give back to the community by participating in our service day .
            Date:May 5,2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingEvent;
