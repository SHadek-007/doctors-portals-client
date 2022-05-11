import { format } from 'date-fns';
import React from "react";

const BookingModal = ({date, treatment, setTreatment}) => {
    const {_id, name, slots} = treatment;

    const handleBooking = e =>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    };
    
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-2xl text-accent text-center">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center mt-3 gap-5 ">
          <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
          <select name='slot' className="select select-bordered w-full max-w-xs">
            {
                slots.map(slot => <option value={slot}>{slot}</option>)
            }
            </select>
          <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
          <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
          <input type="text" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
          <input type="submit" value="Submit" className="btn btn-accent w-full max-w-xs" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;