import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(
      `https://arcane-lowlands-25765.herokuapp.com/available?date=${formatedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  // useEffect(()=>{
  //     fetch(`https://arcane-lowlands-25765.herokuapp.com/available?date=${formatedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // },[formatedDate])

  return (
    <div className="my-12">
      <h4 className="text-2xl text-secondary text-center mb-8">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-12">
        {services?.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
