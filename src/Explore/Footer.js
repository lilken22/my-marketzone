import React from 'react';
 import { RiWhatsappFill } from "react-icons/ri";
 import { FaFacebookMessenger, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='h-full bg-zinc-500 w-full rounded-3xl'>
        
     <div className='flex items-center justify-between '>
      <div className='flex items-center justify-start pl-4 '>
        <div className='text-[rgba(247,247,246,0.68)]'>
          <p>Connect With Us</p>
          <div className='flex justify-evenly mt-3'>
            <RiWhatsappFill />
            <FaFacebookMessenger />
            <FaInstagramSquare />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div >
        <ul className='flex items-center justify-evenly ml-28 text-[rgba(247,247,246,0.68)]'>
            <div>
             <li>About Us</li>
             <li>Career</li>
             <li>Blogs</li>
             <li>Policy</li>
            </div>
            <div className='ml-5'>
             <li>Track My Order</li>
             <li>FAQ</li>
             <li>Sell on MarketZone</li>
             <li>Terms and Conditions</li>
            </div>
        </ul>
      </div>

      <div className="max-w-md w-full mx-auto rounded-3xl shadow-lg p-6 ">
        <div className="relative">
          <input
            type="email"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-white text-gray-900"
            placeholder="Enter your email"
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-500 text-white font-semibold rounded-md">Subscribe</button>
        </div>
      </div>
    </div> 
    </div>
  )
}