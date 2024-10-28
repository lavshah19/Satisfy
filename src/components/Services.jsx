// src/components/Services.jsx
import React from 'react';
import Service2 from './Service2';
import ConstructionServices from './ConstructionServices';
import MajorClients from './MajorClients';


const Services = () => {
  // Define services in a structured format with unique images
  const services = [
    {
      title: "Construction Services",
      items: [
        "Mason (Block, Tile, Plaster, Concrete, Marble)",
        "Carpenter (Finishing & Shuttering, Fixer)",
        "Scaffolder (Certified)"
      ],
      img: "https://plus.unsplash.com/premium_photo-1682882688309-54527c93dc97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with specific images
    },
    {
      title: "Electrical Services",
      items: [
        "Electrician",
        "Pipe Fitter",
        "Plumber",
        "Rigger (Certified)"
      ],
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with specific images
    },
    {
      title: "Operational Roles",
      items: [
        "Supervisor",
        "Time Keeper",
        "Manlift Operator",
        "Forklift Operator",
      ],
      img: "https://plus.unsplash.com/premium_photo-1661962226921-4ae283c4be59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with specific images
    },
    {
      title: "Fabrication and Maintenance",
      items: [
        "Fabricator (Certified)",
        "Painter",
        "Insulator",
        "Flagman / Banksman",
        "Welder (Certified)",
        "Duct Man",
      ],
      img: "https://images.unsplash.com/photo-1513350375601-5040cae53a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with specific images
    },
    {
      title: "Installation and Management",
      items: [
        "Installer",
        "Chargehand",
        "Foreman",
        "Crane Operator",
        "Heavy Duty Driver",
        "Store Keeper",
      ],
      img: "https://plus.unsplash.com/premium_photo-1681074963670-2110c58f4c24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with specific images
    },
  ];

  return (
    <>
    <div id="services" className=" min-h-screen flex items-center ">
      <div className="container mx-auto bg-white  p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              style={{
                backgroundImage: `url('${service.img}')`, // Use unique image for each box
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out hover:bg-opacity-30" />
              <div className="relative p-6 text-white">
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <ul className="list-disc list-inside">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Service2/>
    <ConstructionServices/>
    <MajorClients/>
    
      </>
  );
};

export default Services;
