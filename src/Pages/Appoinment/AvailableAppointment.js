import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='my-12'>
            <h4 className='text-2xl text-secondary text-center mb-8'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-12'>
                {
                    services.map(service => <AppointService key={service._id} service={service}></AppointService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;