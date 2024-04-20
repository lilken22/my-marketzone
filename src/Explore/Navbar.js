import React from 'react';
import { Link } from "react-router-dom";
import Marketlogo from '../Images/Marketlogo.jpg';
import { MdSearch } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-16  px-4 py-2'>
      <div className='flex items-center w-1/4'>
        <Link to="./">
          <img src={Marketlogo} alt="Market-Logo" className="h-12 w-auto" />
        </Link>
      </div>

      <div className='flex flex-grow justify-center'>
        <div className='relative w-full'>
          <input type='text' placeholder='Your Address' className='w-full pl-3  py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500' />
          <MdSearch className='text-gray-400 text-2xl absolute right-4 top-1/2 transform -translate-y-1/2' />
        </div>
      </div>

      <div className='flex items-center w-1/4 justify-between'>
        <div className='flex items-center ml-8'>
          <MdAccountCircle className='text-2xl' />
          <button className='bg-red-500 flex items-center px-2 py-2 ml-10  text-gray-300'>
            <span>Coupon</span>
           </button>
        </div>  
        <div className=''>      
          <button className='bg-green-600 flex items-center gap-1 px-2 py-2  text-white'>
            <FaShoppingCart className='text-xl' />
            <span>Cart</span>
          </button>
        </div>
      </div>
    
       
    </div>
  )
}