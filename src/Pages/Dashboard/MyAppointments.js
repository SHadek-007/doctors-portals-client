import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://arcane-lowlands-25765.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div>
      <h2 className="ml-5 text-xl text-accent mb-6">
        My Appointments: {appointments.length}
      </h2>
      <div className="overflow-x-auto ml-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>QN</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="border">
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.date}</td>
                <td>
                  {(appointment.price && ! appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                  {(appointment.price && appointment.paid) && <div>
                    <p><span className="text-success">Paid</span></p>
                    <p>Transaction Id: <span className="text-success">{appointment.transactionId}</span></p>
                    </div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
