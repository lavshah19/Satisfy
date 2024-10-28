// src/components/MajorClients.jsx
import React from 'react';

const clients = [
  "Trilogistics W.L.L",
  "Qatar Engineering and Construction Co. W.L.L",
  "Woodland General Contracting & Services",
  "Pigeon Engineering Projects, Trading and General Services",
  "Crowne Plaza",
  "Holiday Inn",
  "Phidias Projects",
  "Jascon Engineering W.L.L",
  "Ray Projects Engineers and Contractors W.L.L",
  "Asubhai Engineering W.L.L",
  "Advanced Construction Technologies",
  "Al Fowriya Trading and Contracting W.L.L",
  "Premier Inn Hotels Qatar",
  "MMS Facility Management",
  "Al Huda Engineering Works"
];

const MajorClients = () => {
  return (

    <>
      <h2 className="text-4xl font-bold  text-indigo-600 text-center mt-7 mb-8">
          Our Major Clients
        </h2>
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center " 
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1678917476447-478a8cf22e5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-black bg-opacity-60 p-10 w-full max-w-6xl rounded-lg">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Our Major Clients
        </h2>
        <p className="text-white text-center text-lg mb-6">
          We are proud to serve a diverse array of clients across various industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 text-white text-lg">
          {clients.map((client, index) => (
            <p key={index} className="flex items-start">
              <span className="mr-2 text-yellow-400">•</span> {client}
            </p>
          ))}
        </div>
      </div>
    </div>
      </>
  );
};

export default MajorClients;
