import React from "react";

const AppointService = ({ service, setTreatment}) => {
    const {name, slots, price} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h4 className="text-xl text-center text-secondary">{name}</h4>
        <p><small>
            {slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-400">No Slot Available</span>}
        </small></p>
        <p><small>{slots.length} {slots.length > 1 ? 'SPACES' : "SPACE"} AVAILABLE</small></p>
        <p><small>Price: ${price}</small></p>
        <div className=" justify-center">
          <label htmlFor="booking-modal" 
          onClick={()=> setTreatment(service)} disabled={slots.length === 0}
          className="btn btn-sm btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>

        </div>
      </div>
    </div>
  );
};

export default AppointService;
