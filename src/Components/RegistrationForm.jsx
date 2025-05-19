import React, { useState } from 'react';
import Logo from "../assets/logo.jpg";
import Image from "../assets/jagannath.png";

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '',
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
    //   style={{ backgroundImage: `url(${Image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

      {/* Fixed Logo at Top Center */}
      <div className="absolute top-4 h-24 left-1/2 transform -translate-x-1/2 z-20">
        <img src={Logo} alt="Logo" className="w-24 sm:w-32" />
      </div>

      {/* Form Container */}
      <div className="z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-2 mt-28">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="accepted"
              checked={formData.accepted}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label className="text-sm text-gray-600">
              I accept the{' '}
              <span className="text-orange-600 font-medium hover:underline cursor-pointer">
                Terms of Service
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Submit your request
          </button>
        </form>
      </div>

      {/* Wavy SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,240C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default GetStartedForm;
