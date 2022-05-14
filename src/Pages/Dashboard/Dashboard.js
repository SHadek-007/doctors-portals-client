import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/icons/angle-left.png';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
          <h2 className="text-3xl text-secondary font-bold text-center">Wellcome to Your Dashboard</h2>
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden ml-5 mt-5"
        >
          <img className="text-accent" src={logo} alt="" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border border-secondary rounded-xl">
          <li>
            <Link to={'/dashboard'}>My Appointments</Link>
          </li>
          <li>
            <Link to={'/dashboard/review'}>My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
