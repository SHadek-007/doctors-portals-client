import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res=>res.json())
            .then(data => setAppointments(data))
        }
    },[user]);

    return (
        <div>
            <h2 className='ml-5 text-xl text-accent mb-6'>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto ml-5">
  <table className="table w-full">
    <thead>
      <tr>
        <th>QN</th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody className='border'>
      {
          appointments.map((appointment,index) => <tr key={index}>
            <th>{index + 1}</th>
            <td>{appointment.patientName}</td>
            <td>{appointment.treatment}</td>
            <td>{appointment.slot}</td>
            <td>{appointment.date}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;