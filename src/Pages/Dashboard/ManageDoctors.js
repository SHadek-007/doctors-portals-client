import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const {data:doctors, isLoading} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor',{
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }
    }).then(res => res.json()))
    if(isLoading){
        return <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
             </div>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;