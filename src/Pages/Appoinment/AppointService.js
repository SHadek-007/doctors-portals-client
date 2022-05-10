import React from "react";

const AppointService = ({ service }) => {
    const {name, slots} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
        <p><small>
            {slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-400">No Slot Available</span>}
        </small></p>
        <p><small>{slots.length} {slots.length > 1 ? 'SPACES' : "SPACE"} AVAILABLE</small></p>
        <div className=" justify-center">
          <button disabled={slots.length === 0} className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointService;
