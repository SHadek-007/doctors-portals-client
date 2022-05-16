import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index, refetch}) => {
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method:"PUT",
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success('Made Admin Successfully');
        })
    }
    return (
        <tr className='border'>
        <th>{index + 1}</th>
        <td>{user.email}</td>
        <td>{user.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-secondary text-white">Make Admin</button>}</td>
        <td><button className="btn btn-xs btn-secondary text-white">Remove User</button></td>
      </tr>
    );
};

export default UserRow;