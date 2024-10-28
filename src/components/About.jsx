// src/components/About.jsx
import React from 'react';


const About = () => {
  return (
    <>
    <div id="about" className=" min-h-screen flex items-center justify-center ">
      <div className="container mx-auto p-6 md:p-12  bg-white rounded-lg  ">
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-6">
          About Satisfy W.L.L
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Box */}
          <div className="bg-[#E5E7EB] rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Satisfy W.L.L has been established to provide exceptional services in Facility Management, Construction, MEP, and Hospitality sectors in Qatar. We pride ourselves on our ability to respond efficiently to customer needs. Over the years, Satisfy W.L.L has become synonymous with quality, reliability, and professionalism.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">
            Our dedicated team is committed to ensuring that our clients receive tailored solutions that meet their unique requirements. We believe that our success is rooted in the satisfaction of our clients and the partnerships we build.
            </p>
          </div>

          {/* Our Goal Box */}
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">Our Goal</h2>
            <p className="text-lg leading-relaxed">
            Our goal is to maintain a high level of professionalism in our operations, ensuring that we meet our clients' demands and exceed their expectations. Client satisfaction is our utmost objective, and we strive to achieve this through our unwavering commitment to excellence.
            </p>
            <p className="text-lg leading-relaxed mt-2">
            Satisfy W.L.L collaborates with numerous local companies, supporting them in offering their services across various key areas, including:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Facility Management Solutions</li>
              <li>Comprehensive Construction Services</li>
              <li>Expert MEP Services</li>
              <li>Innovative Hospitality Solutions</li>
              <li>Consultation Services to Enhance Business Efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default About;
