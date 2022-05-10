import React, { useState } from "react";
import chair from '../../assets/images/chair.png';
import bgChair from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div style={{
        backgroundImage:`url(${bgChair})`
    }} class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="sm:max-w-sm lg:max-w-xl rounded-lg shadow-2xl" alt=""
        />
        <div className="lg:mr-28">
            <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
            />
            <p>You Have Selected: {format(date, 'PP')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
