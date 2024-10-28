// src/components/Service2.jsx
import React from 'react';

const services = [
  "Manager",
  "Executive Officer",
  "Public Relation Officer",
  "Accountant",
  "Auditor",
  "Cashier",
  "Secretaries",
  "Receptionist / Front Desk Clerk",
  "Cooks",
  "Restaurant Captain",
  "Barman / Bartender",
  "Waiter / Waitress",
  "Baker",
  "Housekeeper",
  "Janitor",
  "Service Man / Bell Boy",
  "Store Keeper",
  "Security Guard",
  "Security Officer"
];

const Service2 = () => {
  return (
    <>
     <h2 className="text-4xl font-bold text-indigo-600  text-center mb-8">
          General Cleaning & Hospitality Services
        </h2>
    <div 
    
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
      <div className="bg-black bg-opacity-60 p-10 w-full max-w-6xl rounded-lg">
        <h2 className="text-4xl font-bold  text-yellow-400 text-center mb-8">
          General Cleaning & Hospitality Services
        </h2>
        <p className="text-white text-center text-lg mb-6">
          We provide a variety of services across housekeeping, event support, cleaning, managerial roles, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 text-white text-lg">
          {services.map((service, index) => (
              <p key={index} className="flex items-start">
              <span className="mr-2 text-yellow-400">•</span> {service}
            </p>
          ))}
        </div>
      </div>
    </div>

          </>
  );
};

export default Service2;
