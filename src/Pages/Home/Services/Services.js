import React from "react";
import fluride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
import treatment from '../../../assets/images/treatment.png';

const Services = () => {
  const services = [
    {
      _id: "1",
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluride,
    },
    {
      _id: "1",
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Cavity,
    },
    {
      _id: "1",
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Whitening,
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-lg text-primary uppercase font-bold">
          Our Services
        </h3>
        <h1 className="text-4xl text-accent">Services We Provide</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="lg:px-32 mt-20 mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl gap-16">
          <figure>
            <img className="w-80"
              src={treatment}
              alt="Album"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
