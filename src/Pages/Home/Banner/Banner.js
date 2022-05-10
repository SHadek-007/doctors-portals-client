import React from "react";
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';
const Banner = () => {
  return (
    <div style={{
      backgroundImage:`url(${bgChair})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
      }} className="hero min-h-screen lg:px-12 mb-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm lg:max-w-xl rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
