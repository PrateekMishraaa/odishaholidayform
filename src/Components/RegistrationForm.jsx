import React, { useState } from 'react';
import Logo from "../assets/logo.jpg";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const GetStartedForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
    Mobile: '',
    accepted: false,
  });
  console.log(formData)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
console.log(handleChange)
  const handleSubmit = async (e) => {
  e.preventDefault();

  const { Name, Email, Mobile, Message, accepted } = formData;

  if (!Name || !Email || !Mobile || !Message || !accepted) {
    toast.error("All fields are required and Terms must be accepted");
    return;
  }

  try {
    await axios.post("http://localhost:5000/api/contact", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("Form has been submitted successfully");

    // Reset form
    setFormData({
      Name: '',
      Email: '',
      Message: '',
      Mobile: '',
      accepted: false,
    });

    // Redirect to external site after 2 seconds
    setTimeout(() => {
      window.location.href = "https://odishaholidays.in/";
    }, 2000);

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again later.");
  }
};


  return (
    <>
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Logo */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <img src={Logo} alt="Logo" className="h-32 sm:h-20 object-contain" />
        </div>

        {/* Form */}
        <div className="z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-2 mt-28">
          <p className="text-center text-gray-700 font-medium text-sm mb-4">
            Get Exclusive Offers! Complete the form and we’ll connect with you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Enter a valid email address"
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
              <input
                type="text"
                name="Mobile"
                placeholder="Enter your mobile number"
                value={formData.Mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="Message"
                placeholder="Enter your message"
                rows="4"
                value={formData.Message}
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
          <svg className="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,240C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-2 z-30 right-2">
        <a
          href="https://wa.me/919540802061"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition"
        >
          <BsWhatsapp className="text-4xl text-green-600" />
        </a>
      </div>

      <ToastContainer />
    </>
  );
};

export default GetStartedForm;
