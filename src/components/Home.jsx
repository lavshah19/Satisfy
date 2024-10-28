// src/components/Home.jsx
import React from 'react';

import About from './About';
import Services from './Services';
import Contact from './Contact';




const Home = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@satisfydoha.com?subject=Inquiry&body=Hello, I would like to know more about your services.';
  };

  return (
    <>
    <div className=" min-h-screen flex items-center ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 bg-opacity-90 bg-white rounded-lg p-8 md:p-12">
        
        {/* Left Content Section */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
            Welcome to Satisfy Trading & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your reliable partner in high-quality trading and service solutions. We offer expertise and commitment to meet your business needs.
          </p>

          {/* Mission Statement */}
          <div className="bg-indigo-700 text-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-md leading-relaxed">
              At Satisfy Trading & Services W.L.L, we are committed to providing top-notch trading and service solutions tailored to meet the unique needs of our clients. Our mission is to ensure trust, reliability, and customer satisfaction in every business partnership.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <p className="text-xl font-medium text-indigo-800 mb-4">
              Want to know more about our services? Reach out to us!
            </p>
            <button 
              onClick={handleContactClick} 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
  <div className="w-full md:w-3/4 h-80 md:h-96 flex items-center justify-center shadow-lg rounded-lg overflow-hidden">
    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Introductory" className="w-full h-full object-cover" />
  </div>
</div>

      </div>
    </div>
    <About />
      <Services />
   
      <Contact />
     

    </>
  );
};

export default Home;
