import React from 'react';
import sneakers1 from '../Images/sneakers1.webp';
import sneakers2 from '../Images/sneakers2.webp';
import sneakers3 from '../Images/sneakers3.jpeg';
import sneakers4 from '../Images/sneakers4.webp';
import shopingbag from '../Images/ShopingBag.jpg';
import google from '../Images/google-g-2015.svg';
import facebook from '../Images/facebook-3-3.svg';
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Box() {
  return (
    <div className="container px-6 py-2 rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-3xl">
        <div className="bg-white p-2 rounded-lg">
          <div className="grid grid-cols-2 gap-2 align-middle">
            <div className="flex flex-col items-center justify-center"> {/* Centered content */}
              <Link to='#'><img src={sneakers1} alt="Sneakers 1" className="w-[60px] h-[60px] rounded-md text-center" /></Link>
              <p className="text-xs mt-2 text-gray-600">Nike Sport</p>
              <p className="text-xs text-black mt-1">#2,599</p>
            </div>
            <div className="flex flex-col items-center justify-center"> {/* Centered content */}
              <Link to='#'><img src={sneakers2} alt="Sneakers 2" className="w-[60px] h-[60px] rounded-md text-center" /></Link>
              <p className="text-xs mt-2 text-gray-600">Nike Sport</p>
              <p className="text-xs text-black mt-1">5,999</p>
            </div>
            <div className="flex flex-col items-center justify-center"> {/* Centered content */}
              <Link to='#'><img src={sneakers3} alt="Sneakers 3" className="w-[60px] h-[60px] rounded-md text-center" /></Link>
              <p className="text-xs mt-2 text-gray-600">Easy shoes</p>
              <p className="text-xs text-black mt-1">8,999</p>
            </div>
            <div className="flex flex-col items-center justify-center"> {/* Centered content */}
              <Link to='#'><img src={sneakers4} alt="Sneakers 4" className="w-[60px] h-[60px] rounded-md text-center" /></Link>
              <p className="text-xs mt-2 text-gray-600">Cool Adidas</p>
              <p className="text-xs text-black mt-1">6,299</p>
            </div>
          </div>
        </div>


        <div className="bg-white p-2 flex items-center justify-center flex-col rounded-lg">
          <div className="flex items-center justify-between w-50">
            <div>
              <FaArrowCircleLeft className="w-4 h-4" /> {/* Backward Icon */}
            </div>  
            <div className=" items-center ml-2" >
              <p className="text-xs font-bold text-gray-600"> Black Saffiano leather Bag</p> {/* Text */}
              <p className="text-sm font-bold">$6,999</p> {/* Price */}
            </div>
            <div>
              <Link to='#'><img src={shopingbag} alt="Product" className="mt-2 w-12 h-auto mr-2" /></Link>
            </div>
            <div>
              <FaArrowCircleRight className="h-4 w-4 text-center"/> {/* Forward Icon */}
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg flex flex-col items-center justify-center">
            <div className="flex justify-between mb-2">
            <button className="bg-black hover:bg-gray-500 text-white font-bold py-1 px-2 rounded mr-6">
             Register
            </button>
            <button className="bg-white hover:bg-gray-700 text-gray-300 font-bold py-1 px-2 mr-4 rounded-2xl">
            SignUp
            </button>
            </div>
           <p className="text-center text-xs text-gray-400">Or Connect With </p>
           <div className="flex justify-between mt-2">
            <Link to="#" className='mr-10'><img src={google} alt='google-logo' /></Link>
           <Link to="#" className=''><img src={facebook} alt='facebook-logo' /></Link>
          </div>
         </div>
      </div>
    </div>
  );
};